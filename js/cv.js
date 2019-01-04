$(document).ready(function () {
    //section_status has the info of the status of the divs with the different sections. 0 means visible, 1 means hidden.
    var section_status = [0,0]
    $('.toggler').click(function () {
        var index = $(this).attr("class").substr(8)
        console.log(index);
        $(this).parent().find('div').hide();
    });
    
});