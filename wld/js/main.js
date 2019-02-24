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
    
/*    When cicking on expand*/
    $(".expand").click(function(){
        alert("When clicking here more verses of these witness before and after the selected topic would be displayed in the column.");
    });
    
/*    When clicking on the super-container selector buttons*/
    $("button[id*='b_sc']").click(function(){
        option_selected = $(this).attr("id").split("_")[2];
        $("div[class='super-container']").hide();
        $("div[id='sc_"+option_selected+"']").show();
    });

    
    
});