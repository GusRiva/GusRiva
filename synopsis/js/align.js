function draw_lines(){
    container_width = $("#synoptic_container").width();
    container_height = $("#synoptic_container").children().first().height(); 
    var paper = new Raphael(document.getElementById('canvas_container'), container_width, container_height);
    
    first_column = $("#synoptic_container").children().first();
    second_column = $("#synoptic_container").children().eq(1);
    
    first_column.children().each(function(){
       start_element = $(this);
       start_element_pos = start_element.position();
       start_element_x_pos = start_element_pos.left;
       start_element_y_pos = start_element_pos.top + 15;
       
/*       Limit to the visible elements in column 1*/
       if ( (start_element_y_pos < -10) || (start_element_y_pos > container_height +30 )) {
           return
       };
       
       start_element_width = start_element.width();
        
       verse_number = start_element.children(".align_nr").text();
       
       goal_element = second_column.find(".align_nr").filter(function() {
            return $(this).text() === verse_number;
            }).parent();
       goal_element_pos = goal_element.position();
       
       if ( goal_element.is('div.tei-line') ) {
            goal_element_x_pos = goal_element_pos.left;
            goal_element_y_pos = goal_element_pos.top + 15;
            goal_element_width = goal_element.width();
       
            var curve = paper.path("m "+ start_element_x_pos + " " + start_element_y_pos + " l "+ start_element_width +" 0 L "+ goal_element_x_pos + " " + goal_element_y_pos + " l " + goal_element_width + " 0"); 
            curve.attr({stroke: 'green', 'stroke-width': 20, 'stroke-opacity': 0.2})    
       };
       

       
    });  
    
    
/*    From the second to the first column*/
    second_column.children().each(function(){
       start_element = $(this);
       start_element_pos = start_element.position();
       start_element_x_pos = start_element_pos.left;
       start_element_y_pos = start_element_pos.top + 15;
       
/*       Limit to the visible elements in column 1*/
       if ( (start_element_y_pos < -10) || (start_element_y_pos > container_height +30 )) {
           return
       };
       
       start_element_width = start_element.width();
       start_element_x_pos = start_element_x_pos + start_element_width; // to start at the end of the element, as it is the second column, goes from right to left 
        
       verse_number = start_element.children(".align_nr").text();
       
       goal_element = first_column.find(".align_nr").filter(function() {
            return $(this).text() === verse_number;
            }).parent();
       goal_element_pos = goal_element.position();
       
       if ( goal_element.is('div.tei-line') ) {
            goal_element_x_pos = goal_element_pos.left;
            goal_element_y_pos = goal_element_pos.top + 15;
            goal_element_width = goal_element.width();
            goal_element_x_pos = goal_element_x_pos + goal_element_width;
       
            var curve = paper.path("m "+ start_element_x_pos + " " + start_element_y_pos + " l -"+ start_element_width +" 0 L "+ goal_element_x_pos + " " + goal_element_y_pos + " l -" + goal_element_width + " 0"); 
            curve.attr({stroke: 'green', 'stroke-width': 20, 'stroke-opacity': 0.2})    
       };
       

       
    });  
    
    
};

$(document).ready(function() {
    draw_lines();
   
    $('.column').scroll(function(){
        console.log("Scrolling");
        $("svg").remove();
        draw_lines();
    });
    

    
    
});

$( window ).resize(function() {
    $("svg").remove();
    draw_lines();
    
});


    



