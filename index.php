<!DOCTYPE html>
<html lang="en" data-ng-app="cultivatedmooseApp">
<head>
<title>Mad Moose Creations</title>
<meta name="description" content="Mad Moose Creations">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="css/bootstrap-glyphicons.css" rel="stylesheet" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT|PT+Sans" type="text/css">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="css/cultivatedmoose.css" rel="stylesheet" />
</head>

<body style="background:white;" data-ng-controller="cultivatedmooseParentController" >

<div style="padding-left:50px;padding-bottom:25px;width:100%;background:white">
    <a class="navbar-brand" style="text-decoration:none;float:left;" href="#/"><img style="height:75px;" src="img/cultivatedmooseorange.png" alt="logo"></a>
    <div style="padding-top:35px;">
        <span id="cmtitle" class="bodyFont" style="padding-left:15px;padding-right:0px;margin:auto;letter-spacing:12px;font-size:35px;" >Mad Moose Creations</span> 
        <shopping-cart-items-display 
            itemsincart='{{shoppingcartitemnbr}}'>
        </shopping-cart-items-display>   
    </div>
</div>

<div class="container" style="padding-top:20px;">

<div style="background:white;clear:both;" data-ng-view=""></div>

<div style="background:white;height:75px;">
    <div style="padding-top:30px;padding-left:75px;float:left;">
        <a href="#/aboutus" style="color:orange;text-decoration:none;"><strong>About Myself</strong></a>
    </div>
    <div style="padding-top:30px;padding-right:35px;float:right;">
        <strong>Twitter: <a style="color:orange;padding-top:30px;text-decoration:none;" href="http://twitter.com/cultivatedmoose">@madmoosecreations</a></strong>
    </div>
</div> <!-- end of container -->

</div> <!-- end of container top -->
<!-- Vendor Libs -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

<!-- UI Libs -->
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="http://jqueryrotate.googlecode.com/svn/trunk/jQueryRotate.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js"></script>
<script src="Scripts/jquery.ddslick.min.js"></script>

<!-- App libs -->
<script src="app/cultivatedmooseApp.js"></script>
<script src="app/controllers/controllers.js"></script>
<script src="app/factories/factories.js"></script>
<script src="app/services/productservice.js"></script>
<script src="app/directives/directives.js"></script>
<script src="app/services/shoppingcartservice.js"></script>
<script src="app/validations/validate.js"></script>

<script src="Scripts/cultivatedmoose.js"></script>

</body>
</html>
