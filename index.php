<!DOCTYPE html>
<html lang="en" data-ng-app="cultivatedmooseApp">
<head>
<title>The Cultivated Moose</title>
<meta name="description" content="The Cultivated Moose">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="layout" content="website"/>

<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT|PT+Sans" type="text/css">
<!-- <link href="css/bootstrap.min.css" rel="stylesheet" />
<link href="css/bootstrap-responsive.min.css" rel="stylesheet" /> -->
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
<link href="css/cultivatedmoose.css" rel="stylesheet" />
</head>

<body>
<div class="container">
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <a class="brand " href="#/">
            <img style="padding-left:50px;height:75px;" src="img/cultivatedmoose.png" alt="logo"> <span id="ywTitle" class="bodyFont" style="padding-left:45px;letter-spacing:12px;font-size:35px;" >The Cultivated Moose</span>
        </a>
    </div> <!-- end of inner -->
</div> <!-- end of fixed top -->
</div> <!-- end of container -->

<div style="background:#F8F8F8;" data-ng-view=""></div>

<div id="footer">
    <div class="navbar navbar-fixed-bottom">
        <div class="navbar-inner">
            <div class="container">
                <footer>
                    <div style="padding:15px;" class="row">
                        <div class="span4">
                            <strong><span style="color:blue">About Myself</span></strong>
                        </div>
                        <div class="offset3 span4">
                            <strong>Twitter: <a href="http://twitter.com/cultivatedmoose">@cultivatedmoose</a></strong>
                        </div>
                    </div>
               </footer>
            </div>
        </div>
    </div>
</div>

<!-- Vendor Libs -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

<!-- UI Libs -->
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="http://jqueryrotate.googlecode.com/svn/trunk/jQueryRotate.js"></script>
<!-- <script src="Scripts/bootstrap.min.js"></script> -->
<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<script src="Scripts/ui-bootstrap-tpls-0.4.0.min.js"></script>
<script src="Scripts/jquery.ddslick.min.js"></script>

<!-- App libs -->
<script src="app/cultivatedmooseApp.js"></script>
<script src="app/controllers/controllers.js"></script>
<script src="app/factories/factories.js"></script>
<script src="app/services/walletservice.js"></script>

<script src="Scripts/cultivatedmoose.js"></script>

</body>
</html>
