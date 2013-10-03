<?php

require ('../class/class.Log.php');
include ('../class/class.ErrorLog.php');
include ('../class/class.AccessLog.php');

//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");

$orderid = $_POST["orderid"];

//------------------------------------------------------
// set up msg array for passback
//------------------------------------------------------
$msg = array();
$msg["status"] = "";
$msg["orderid"] = $orderid;
$msg["html"] = "";

//
// messaging
//
$msgLog = new AccessLog("logs/");
$msgLog->writeLog("Custoner Order Cancel started for order id: $orderid");

//------------------------------------------------------
// Write to database with status of cancel paypall 
//------------------------------------------------------
// open connection to host
$DBhost = "localhost";
$DBschema = "madmoosecreationsdb";
$DBuser = "madmoose";
$DBpassword = "madmoose";

//
// connect to db
//
$dbConn = mysql_connect($DBhost, $DBuser, $DBpassword);
if (!$dbConn) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error mysql connect");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 201. Error in processing the cancelation of your order.</center>";
	exit(json_encode($msg));
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 202. Error in processing the cancelation of your order.</center>";
	exit(json_encode($msg));
}

//------------------------------------------------------
// update order status to paid
//------------------------------------------------------      
$sql = "UPDATE ordertbl SET orderstatus = 'canceled', paypalstatus = 'cancel', datetime = '$datetime' WHERE orderid = $orderid";
$sql_result = mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error updating order");
	$log->writeLog("SQL: $sql");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 230. Error in processing the cancelation of your order.</center>";
	exit(json_encode($msg));
}

//------------------------------------------------------
// add order to history table 
//------------------------------------------------------  
$sql = "INSERT into orderhistorytbl select * from ordertbl where orderid = $orderid";
$sql_result = mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error inserting history for order");
	$log->writeLog("SQL: $sql");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 260. Error in processing the cancelation of your order.</center>";
	exit(json_encode($msg));
}

//------------------------------------------------------
// get customer infor for confirmation 
//------------------------------------------------------  
$sql = "SELECT firstname, lastname, email FROM customertbl CT LEFT JOIN ordertbl OT ON CT.customerid = OT.customerid WHERE OT.orderid = $orderid";
$sql_result = mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error updating order");
	$log->writeLog("SQL: $sql");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 240. Unable to get customer information. Order is canceled.</center>";
	exit(json_encode($msg));
}

$row = mysql_fetch_array($sql_result,MYSQL_ASSOC);
	
//
// messaging
//
$msgLog->writeLog("Custoner Order Confirmed canceled for  ".$row["firstname"]." ".$row["lastname"]);	

//
// pass back info
//
$msg["status"] = "ok";
$msg["html"] = "<span class='CancelConfirmationMsg'> As requested ".$row["firstname"]." ".$row["lastname"].". Your order is canceled.</span>";

//
// close db connection
//
mysql_close($dbConn);

exit(json_encode($msg));
?>
