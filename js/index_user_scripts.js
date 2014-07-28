(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         
        
        
        $(document).on("click", "#button_left_menu", function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#left_menu"));  
        });
        $(document).on("click", "#button_background", function(evt)
        {
        /* your code goes here */ 
        });
}
 $(document).ready(register_event_handlers);
})();
