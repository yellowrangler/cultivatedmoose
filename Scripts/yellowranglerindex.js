var titleBanner = "Yellowrangler";
var titleIndex = 0;
var intervalVar = "";

$(document).ready(function() {
  intervalVar=setInterval(function(){buildTitle()},50);
});

function buildTitle()
{
  if (titleIndex < titleBanner.length)
  {
    $("#ywTitle").append(titleBanner[titleIndex]);
    titleIndex++;
  }
  else
  {
    window.clearInterval(intervalVar);
  }
}

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