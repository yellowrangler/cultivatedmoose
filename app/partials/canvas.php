<div style="padding-left:75px;" class="container-fluid">
<div class="row-fluid" style="padding-top:135px;" >
<div class="span12">
<div class="section-article">
<h2>The Great Outdoors</h2>
</div> <!-- end of section-article -->
</div> <!-- end of span12-->
</div> <!-- end of row-fluid -->

<div class="row-fluid" style="padding-top:15px;" >
<div class="span4">
<div class="section-article">
<div id="leftselect">
<h3>Items</h3>

<div class="itemArticleBlocks" data-ng-repeat="outdoor in outdoors">
<span class="itemTitle" data-ng-mouseover="showMsg($index)">{{outdoor.title}}</span>
<div class="itemBody">
</div><!-- end of itemBody -->
<div class="msgBody" data-ng-click="showPanel($index)" data-ng-show="outdoor.isVisible" >
 {{outdoor.msg}}
</div><!-- end of msgBody -->
</div><!-- end of block repeat -->
</div> <!-- end of  leftselect -->
</div> <!-- end of section-article -->
</div> <!-- end of span4 -->

<div class="offset1 span7">
<div id="show-panel"</div>
</div> <!-- end of span8 -->
</div> <!-- end of row-fluid -->
</div> <!-- end of container -->
<div style="padding-bottom:6200px;"></div>