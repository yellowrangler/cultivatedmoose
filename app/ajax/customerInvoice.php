<?php

//
// create customer table data
//
$customer = array();

$customer["fullname"] = $_POST["fullname"];
$customer["address1"] = $_POST["address1"];
$customer["address2"] = $_POST["address2"];
$customer["city"] = $_POST["city"];
$customer["state"] = $_POST["state"];
$customer["phone"] = $_POST["phone"];
$customer["country"] = $_POST["country"];
$customer["email"] = $_POST["email"];

//
// parse through product items
//
$orderItems = array();

for ($i = 0; $i < count($_POST["sku"]); $i++)
{
	$orderItems[$i]["sku"] = $_POST["sku"][$i];
	$orderItems[$i]["item"] = $_POST["item"][$i];
	$orderItems[$i]["costper"] = $_POST["costper"][$i];
	$orderItems[$i]["color"] = $_POST["color"][$i];	
	$orderItems[$i]["qty"] = $_POST["qty"][$i];
	$orderItems[$i]["totalcost"] = $_POST["totalcost"][$i];	
}

//
// parse through product order
//
$order = array();

$order["purchasetotal"] = $_POST["purchasetotal"];
$order["shippingcost"] = $_POST["shippingcost"];
$order["paymentrequired"] = $_POST["paymentrequired"];

//  debugg
// print_r($customer);
// print_r($orderItems);
// print_r($order);

//
// validation - ad up and compare numbers? stuff like that
//


//
// Write to database with status of pending paypall - collect and save session variable??
//






?>
