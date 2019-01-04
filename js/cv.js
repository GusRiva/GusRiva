$(document).ready(function () {
    //section_status has the info of the status of the divs with the different sections. 0 means visible, 1 means hidden.
    var section_status = [1,1];
    
    $("div.section").hide();
    
    $("[class*='toggler']").click(function () {
        var index = $(this).attr("class").substr(8)
        if (section_status[index] == 0){
           $(this).parent().find("div[n=" + index +"]").hide();
           $(this).find("a[n=" + index +"]").hide();
           section_status[index] = 1;
        }else{
            $(this).parent().find("div[n=" + index +"]").show();
            $(this).find("a[n=" + index +"]").show();
            section_status[index] = 0;
        };
    });
    
});