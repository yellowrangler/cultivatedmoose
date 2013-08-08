//
// validate shipping form
//

function validateWalletForm()
{
	var err = "";

	err = ddslickValidation($("#fabriclist"), "Please select fabric color");
	if (err) return err;

	err = simpleNumberValidation($("#walletsize"), "Please select size", 1);
	if (err) return err;

	err = simpleNumberValidation($("#walletqty"), "Please select quantity", 1);
	if (err) return err;

	return 0;
}

function validateShippingForm()
{
	var err = "";

	err = simpleValidation($("#fullname"), "Please enter required First Name");
	if (err) return err;

	err = simpleValidation($("#address1"), "Please enter required Address");
	if (err) return err;
	
	err = simpleValidation($("#city"), "Please enter required City");
	if (err) return err;

	err = simpleValidation($("#state"), "Please enter required State");
	if (err) return err;

	err = simpleValidation($("#zip"), "Please enter required ZIP");
	if (err) return err;

	err = simpleValidation($("#email"), "Please enter required eMail address");
	if (err) return err;

	return 0;
}

function simpleValidation(obj,msg)
{
	var test = obj.val();

	if (test.length < 2)
	{
		alert (msg);
		obj.focus();

		return 1;
	}

	return 0;
}

function simpleNumberValidation(obj,msg,smallnbr)
{
	var test = obj.val();

	if (isNaN(test))
	{
		alert (msg);
		obj.focus();

		return 1;
	}

	if (test < smallnbr)
	{
		alert (msg);
		obj.focus();

		return 1;
	}

	return 0;
}

function ddslickValidation(obj,msg)
{
	var test = obj.data('ddslick');

	if (test.selectedIndex < 0)
	{
		alert (msg);
		obj.focus();

		return 1;
	}

	return 0;
}