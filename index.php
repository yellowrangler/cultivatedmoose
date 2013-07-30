<!DOCTYPE html>
<html lang="en" data-ng-app="cultivatedmooseApp">
<head>
<title>Mad Moose Creations</title>
<meta name="description" content="Mad Moose Creations">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT|PT+Sans" type="text/css">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="css/cultivatedmoose.css" rel="stylesheet" />
</head>

<body style="background:white;" >
<div class="container">

<div style="background:white" class="navbar">
    <div class="navbar-inner">
        <a class="navbar-brand" style="text-decoration:none;" href="#/"><img style="background-color:transparent;padding-left:10px;height:75px;" src="img/cultivatedmooseorange.png" alt="logo"></a>
        <ul class="nav navbar-nav" style="padding-top:45px;">
            <li><span id="cmtitle" class="bodyFont" style="padding-left:45px;letter-spacing:12px;font-size:35px;" >Mad Moose Creations</span></li>
        </ul>
        <div id="shoppingcartitems" style="float:right;padding-top:35px;"></div>
    </div><!-- end of navbar-inner -->
</div><!-- end of navbar -->

<div style="background:white;" data-ng-view=""></div>

<div style="background:white;"  class="container">
<div style="height:75px;" class="row">
    <div style="padding-top:30px;padding-left:75px;" class="col-lg-5">
        <strong><span style="color:maroon;">About Myself</span></strong>
    </div>
    <div style="padding-top:30px;" class="col-offset-4 col-lg-3">
        <strong>Twitter: <a style="color:maroon;padding-top:30px;text-decoration:none;" href="http://twitter.com/cultivatedmoose">@madmoosecreations</a></strong>
    </div>
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

<!-- App classes -->
<!-- <script src="app/class/productclass.js"></script> -->

<!-- App libs -->
<script src="app/cultivatedmooseApp.js"></script>
<script src="app/controllers/controllers.js"></script>
<script src="app/factories/factories.js"></script>
<script src="app/services/productservice.js"></script>
<script src="app/services/shoppingcartservice.js"></script>
<!-- <script src="app/directives/directives.js"></script> -->

<script src="Scripts/cultivatedmoose.js"></script>

</body>
</html>
