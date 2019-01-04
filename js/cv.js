$(document).ready(function () {
    //section_status has the info of the status of the divs with the different sections. 0 means visible, 1 means hidden.
    var section_status = [0,0]
    $("[class*='toggler']").click(function () {
        var index = $(this).attr("class").substr(8)
        console.log(section_status);
        if (section_status[index] == 0){
           $(this).parent().find("div[n=" + index +"]").hide();
           section_status[index] = 1;
        }else{
            $(this).parent().find("div[n=" + index +"]").show();
            section_status[index] = 0;
        };
    });
    
});