$(document).ready(function() {
    
    $("#tabs-1").html("<br /><center>Tab 1 body!</center>");

    $( "#tabs" ).tabs({
            beforeActivate: function(event, ui) {
                switch (ui.newPanel.selector)
                {
                    case "#tabs-1": 
                        $("#tabs-1").html("<br /><center>Tab 1 body!</center>")
                        break;
                    
                    case "#tabs-2": 
                        $("#tabs-2").html("<br /><center>Tab 2 body!</center>")
                        break;
                    
                    case "#tabs-3": 
                        $("#tabs-3").html("<br /><center>Tab 3 body!</center>")
                        break;
                            
                    case "#tabs-4": 
                    $("#tabs-4").html("<br /><center>Tab 4 body!</center>")
                        break;  
                }
              }
        });
});
