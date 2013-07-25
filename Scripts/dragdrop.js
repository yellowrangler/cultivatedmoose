$(document).ready(function() {
    
    var boxes=48;
        
    buildGrid(boxes); 
 
    // mark select box as draggable
    $( "#selectBox" ).draggable({ revert: 'invalid'});
    
    // mark grid boxes as droppable 
    $( ".gridAreaBox" ).droppable({
            drop: function( event, ui) {
                var displayVal = this.id; 
                $("#displaySelBox").text(displayVal);   
            }
    });

    $( "#selectBox" ).css('top', '10px' );
    $( "#selectBox" ).css('left', '10px' );    
 
} );  

function buildGrid(boxes)
{
    for (var i = 0; i < boxes; i++)
    {
        var thisId = "Box# "+i;
        
        $("#silo").append("<div class='gridAreaBox' id='"+thisId+"' ><center><span style='padding-top:15px;font-size:400%;color:Maroon;'>"+i+"</span></center></div>");
    } // end of boxes
} // buildGrid