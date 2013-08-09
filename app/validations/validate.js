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

	err = simpleValidation($("#firstname"), "Please enter required First Name",2,255);
	if (err) return err;

	err = simpleValidation($("#lastname"), "Please enter required Last Name",2,255);
	if (err) return err;

	err = simpleValidation($("#address1"), "Please enter required Address",2,255);
	if (err) return err;
	
	err = simpleValidation($("#city"), "Please enter required City",2,255);
	if (err) return err;

	err = simpleValidation($("#state"), "Please enter required State",2,2);
	if (err) return err;

	err = simpleValidation($("#zip"), "Please enter required ZIP",5,9);
	if (err) return err;

	err = phoneNbrValidation($("#phonea"),$("#phoneb"), $("#phonec"), "Please enter required Phone Number");
	if (err) return err;

	err = simpleValidation($("#email"), "Please enter required eMail address",2,255);
	if (err) return err;

	return 0;
}

function simpleValidation(obj,msg,lth_min,lth_max)
{
	var test = obj.val();

	if (test.length < lth_min || test.length > lth_max )
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

function phoneNbrValidation(obja,objb,objc,msg)
{
	var test = new Array();
	test[0] = obja;
	test[1] = objb;
	test[2] = objc;

	for (var i = 0; i < test.length; i++)
	{
		var thistest = test[i].val();

		switch(i)
		{
			case 0:
			case 1:
				if (thistest.length != 3)
				{
					alert (msg);
					test[i].focus();

					return 1;
				}

				for (var k = 0; k < thistest.length; k++)
				{
					if (isNaN(thistest[k]))
					{
						alert (msg);
						test[i].focus();

						return 1;
					} 
				}
				break;

			case 2:
				if (thistest.length != 4)
				{
					alert (msg);
					test[i].focus();

					return 1;
				}

				for (var k = 0; k < thistest.length; k++)
				{
					if (isNaN(thistest[k]))
					{
						alert (msg);
						test[i].focus();

						return 1;
					} 
				}
				break;
		}
	}

	return 0;
}
