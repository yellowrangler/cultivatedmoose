<!DOCTYPE html>
<html lang="en" data-ng-app="cultivatedmooseApp">
<head>
<title>Mad Moose Creations</title>
<meta name="description" content="Mad Moose Creations">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="css/bootstrap-glyphicons.css" rel="stylesheet" />
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT|PT+Sans" type="text/css">
<link href="css/cultivatedmoose.css" rel="stylesheet" />
</head>

<body style="background:white;" data-ng-controller="cultivatedmooseParentController" >

<div style="padding-left:50px;padding-bottom:25px;width:100%;background:#FBF1E4">
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

</div> <!-- end of container top -->

<div style="background:#FBF1E4;height:275px;">
    <div style="padding-top:30px;padding-left:75px;float:left;">
        <a href="#/aboutus" style="color:orange;text-decoration:none;"><strong>Our Story</strong></a>
    </div>
    <div id="follow" style="padding-top:30px;padding-right:55px;float:right;">
        <span style="padding-top:5px;color:orange;font-size:110%;font-weight:900;">Follow us On &nbsp; </span>
        
        <a href="https://www.facebook.com/MadMooseCreations" style="pading-left:35px;text-decoration:none;color:orange;font-size:20px;"> <i style="display:inline-block;padding-top:5px;" title="MadMooseCreations @ Facebook" class="fa fa-facebook-square"></i></a>

        <span style="width:45px;">&nbsp;</span>

        <a href="http://twitter.com/MadMooseCreations" style="pading-left:35px;text-decoration:none;color:orange;font-size:20px;"> <i style="display:inline-block;padding-top:5px;" title="MadMooseCreations @ Twitter" class="fa fa-twitter-square"></i></a>

        <span style="width:45px;">&nbsp;</span>

        <a href="http://http://www.pinterest.com/MadMooseCreations/boards/" style="pading-left:35px;text-decoration:none;color:orange;font-size:20px;"> <i style="display:inline-block;padding-top:5px;" title="MadMooseCreations @ pinterest" class="fa fa-pinterest-square"></i></a>
    </div>
</div> <!-- end of footer -->

<!-- Vendor Libs -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

<!-- UI Libs -->
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://jqueryrotate.googlecode.com/svn/trunk/jQueryRotate.js"></script>
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
