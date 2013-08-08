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
$msgLog->writeLog("Custoner Order Confirmation started for order id: $orderid");

//------------------------------------------------------
// Write to database with status of pending paypall 
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
	$msg["html"] = "<center>System Error 101. Unable to confirm your order.</center>";
	exit(json_encode($msg));
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 102. Unable to confirm your order.</center>";
	exit(json_encode($msg));
}

//------------------------------------------------------
// update order status to paid
//------------------------------------------------------      
$sql = "UPDATE ordertbl SET orderstatus = 'paid', paypalstatus = 'paid', datetime = '$datetime' WHERE orderid = $orderid";
$sql_result = mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error updating order");
	$log->writeLog("SQL: $sql");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 130. Unable to confirm your order.</center>";
	exit(json_encode($msg));
}

//------------------------------------------------------
// get customer infor for confirmation 
//------------------------------------------------------  
$sql = "SELECT fullname, email FROM customertbl CT LEFT JOIN ordertbl OT ON CT.customerid = OT.customerid WHERE OT.orderid = $orderid";
$sql_result = mysql_query($sql, $dbConn);
if (!$sql_result)
{
	$log = new ErrorLog("logs/");
	$sqlerr = mysql_error();
	$log->writeLog("SQL error: $sqlerr - Error updating order");
	$log->writeLog("SQL: $sql");

	$msg["status"] = "err";
	$msg["html"] = "<center>System Error 140. Unable to get customer information. Order is confirmed.</center>";
	exit(json_encode($msg));
}

$row = mysql_fetch_array($sql_result,MYSQL_ASSOC);
	
//
// messaging
//
$msgLog->writeLog("Custoner Order Confirmed paid for  ".$row["fullname"]);	

//
// pass back info
//
$msg["status"] = "ok";
$msg["html"] = "<h4>Congratulations ".$row["fullname"]."! Your order is confirmed. Expect two weeks before delivery.</h4>";

//
// close db connection
//
mysql_close($dbConn);

exit(json_encode($msg));
?>
