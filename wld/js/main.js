$(document).ready(function () {
    previousSelectedTopic = ""
/*        Hide other tables*/
    $(".other-text-table *").hide();
/*    When click on topic selector*/
    $(".topic-selector").click( function(){
        topicNumber = $(this).attr("id").substr(1);
        if (topicNumber == previousSelectedTopic){
            $(this).css("color","black");
            $("span[class='text-markup'][title='"+topicNumber+"']").css("color","black");
            $(".other-text-table *").hide();
            previousSelectedTopic = "";
        }
        else {
            $(".topic-selector").css("color","black");
            $(this).css("color","blue");
            $("span[class='text-markup'][title*='"+previousSelectedTopic+"']").css("color","black");
            $("span[class='text-markup'][title*='"+topicNumber+"']").css("color","blue").show();
            $(".other-text-table *").show();
            $(".other-text-table tr").not("tr[class*='"+topicNumber+"']").hide();
            
           
            previousSelectedTopic = topicNumber;
        };
        
    });


});