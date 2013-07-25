<div style="padding-left:75px;" class="container-fluid">
<div class="row-fluid" style="padding-top:135px;" >
<div class="span4">
<div class="section-article">
<h2>Web Technology</h2>

<div id="leftselect">
<h3>Examples</h3>
<div class="itemArticleBlocks" data-ng-repeat="tech in techs">
<span class="itemTitle" data-ng-mouseover="showMsg($index)">{{tech.title}}</span>
<div class="itemBody">
</div><!-- end of itemBody -->
<div class="msgBodyNoSelect" data-ng-show="tech.isVisible"  >
 {{tech.msg}}
 <br />
 <a data-ng-click="showPanel('demo', $index)" style="text-decoration:none;cursor:pointer;">Demo</a><span style="width:25px;">&nbsp;&nbsp;&nbsp;&nbsp;</span><a data-ng-click="showPanel('code', $index)"   style="text-decoration:none;cursor:pointer;">Code</a>
</div><!-- end of msgBody -->
</div><!-- end of block repeat -->
</div> <!-- end of  leftselect -->
</div> <!-- end of section-article -->
</div> <!-- end of span4 -->

<div class="offset1 span7">
<div id="show-panel"></div> 
</div> <!-- end of span8 -->
</div> <!-- end of row-fluid -->
</div> <!-- end of container -->
<div style="padding-bottom:6200px;"></div>