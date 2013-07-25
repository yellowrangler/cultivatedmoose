<style type="text/css">
.newsItem {
    width:85%;
}

.imgpointer:hover {
    cursor:pointer;
}
</style>

<script type="text/javascript" >
$(document).ready(function() {
    $('.imgpointer').click(function() {
        var img = new Image();
        // img.src = this.id;
        img.src = this.src;
        // var img = document.getElementById(this.id); 
        var width = img.width;
        var height = img.height;
        var imageurl = "app/ajax/showimages.php?image="+this.src;
        PopUP(imageurl, 'image', height, width, 0);
    }); 
});

function PopUP (urlParm, wname, ht, wt, restrict) 
{
    var winLeft, winTop;
    
    winLeft = (screen.width-wt)/2;
    winTop = (screen.height-(ht+110))/2; 

    if (restrict == 1)
    {
        popNew = window.open(urlParm,wname,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,width="+wt+",height="+ht+",left="+ winLeft+",top="+winTop+",resizable=0"); 
    }
    else
    {
        popNew = window.open(urlParm,wname,"toolbar=yes,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,width="+wt+",height="+ht+",left="+winLeft+",top="+winTop+",resizable=1");       
    }
    return false;
}
</script>

<div style="padding-left:25px;" class="container-fluid">
<div class="row-fluid">
<div class="span12">
<div class="section-article">
<h3>The Appalachain Trail</h3>
<img border="0" align="left" width="110" class="imgpointer" style="padding-right:15px;" id="img/appalachian_trail_map.jpg" src="img/appalachian_trail_map.jpg">

<p>My son William is currently walking the Appalachain trail. As a result, I am including a map of the trail so that I can follow him.</p> 
I will add information I get from him regarding his trip in most recent at top.
</div> <!-- end of article -->
</div> <!-- end of span -->
</div> <!-- end of row -->

<div class="row-fluid" style="padding-top:15px;">
<div class="span12">
<div class="section-article">
<span><strong>Date: April 11, 2013</strong></span>
<br />
<span><strong>Place: Erwin, TN</strong></span>
<br /><br />
<img border="0" align="right" width="110" style="padding-left:15px;" id="img/04112013-mountains.png" class="imgpointer" src="img/04112013-mountains.png">
<span>In Erwin Tennessee. Weathers been a lot better since leaving the smokeys but got 
12 hr stomach virus last night as did a handful of people I shared a shelter with 2 
nights ago. I and them went into town today to recover and miss tonights 
thunderstorm. Not sure what mountain this was but it was a couple days ago;</span>
</div> <!-- end of article -->
</div> <!-- end of span -->
</div> <!-- end of row -->

<div class="row-fluid" style="padding-top:15px;">
<div class="span12">
<div class="section-article">
<span><strong>Date: March ??, 2013</strong></span>
<br />
<span><strong>Place: Springer Mountain, GA</strong></span>
<br /><br />
<span>Will starts his hike.</span>
<br /><br />
</div> <!-- end of article -->
</div> <!-- end of span12 -->
</div> <!-- end of row -->
<div id="end" style="position:relative;display:block;height:300px;">
<br /><br />
</div> <!-- end of container -->
