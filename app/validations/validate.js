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

	err = simplePhoneValidation($("#phone"),"Please enter required Phone Number");
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

function simplePhoneValidation(obj,msg)
{
	var test = obj.val();
	var err = 0;

	if (isNaN(test))
	{
		//
		// if not all number must have dashes
		//
		if (test.length != 12)
		{
			err = 1;
		}

		for (var i = 0; i < test.length; i++)
		{
			switch(i)
			{
				case 0:
				case 1:
				case 2:
				case 4:
				case 5:
				case 6:
				case 8:
				case 9:
				case 10:
				case 11:
					if (isNaN(test[i]) )
					{
						err = 1;
					}
					break;

				case 3:
				case 7:
					if (test[i] != "-")
					{
						err = 1;
					}
				break;	
			}

		}
	}
	else
	{
		if (test.length != 10)
		{
			err = 1;
		}
		else
		{
			var formattedStr = test.slice(0,3)+"-"+test.slice(3,6)+"-"+test.slice(6);
			obj.val(formattedStr);
		}
	}

	if (err)
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