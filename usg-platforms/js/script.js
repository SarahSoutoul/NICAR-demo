
/* script.js 
   Author:
   Date:
*/

clicked = true;
$(document).ready(function(){ // begin document.ready block
 
 


    $(".issue-button").click(function(){
        $(".issue-button").removeClass("activebutton");
        $(this).addClass("activebutton");
    /* $(".issue-button").not($(this)).css("background-color", "white");
        $(".issue-button").not($(this)).css("color", "black");

        if(clicked){
            $(this).css('background-color', 'gray');
            $(this).css('color', 'white');
            clicked  = false;
        } else {
            $(this).css('background-color', 'white');
            $(this).css('color', 'gray');
            clicked  = true;
        }  */

    });

    
  
    $('#gallery').html(function(i,h){
        return h.replace(/&nbsp;/g,'');
    });

   $('.issue-button').click(function(){

        //$('#gallery').fadeOut();
        // $('.candidate').fadeIn();
        //console.log('click');

        var issue = $(this).attr('data-keyword');
        //console.log(issue);

        $('.candidate').each(function(i){

            var candidateid = Number($(this).attr('candidate-id'));
            //console.log(candidateid);
            //console.log(issue);
            //if (!$(this).hasClass(issue)) {
            if (candidates[candidateid][issue] != '') {
                //console.log(candidates[candidateid][issue]);
                //console.log(candidateid + ' has the class of ' + issue);
                //console.log(candidates[candidateid][issue]);
                $(this).find('.box').html(candidates[candidateid][issue]).fadeIn();
                $(this).find('.img').fadeIn();
                $(this).fadeIn();

            } else {
                 $(this).fadeOut();
               
                //$(this).find('.box').fadeOut();
                //$(this).find('.img').fadeOut();
            }

        });

        $(".reset-button").click(function(){
            console.log("fdgd")
            $(".candidate").fadeIn();
            $(".box").fadeOut();
            $(".issue-button").removeClass("activebutton");
        })
    
        $('#gallery').fadeIn();

    });

  
}); //end document.ready block


var candidates = [];

function loaddata(data){


	//console.log(data);

	
	//console.log(data.feed.entry.length);


	var leng = data.feed.entry.length;


	for ( var i=0; i<leng; i++) {

		candidates[i] = {
			id: i,
            names: data.feed.entry[i].gsx$names.$t,
            keyword: data.feed.entry[i].gsx$keyword.$t,
            greeklife: data.feed.entry[i].gsx$greeklife.$t,
            sustainability: data.feed.entry[i].gsx$sustainability.$t,
            academicpolicies: data.feed.entry[i].gsx$academicpolicies.$t,
            health: data.feed.entry[i].gsx$health.$t,
            safety: data.feed.entry[i].gsx$safety.$t,
            dining: data.feed.entry[i].gsx$dining.$t,
            housing: data.feed.entry[i].gsx$housing.$t,
            outreach: data.feed.entry[i].gsx$outreach.$t,
            campusresources: data.feed.entry[i].gsx$campusresources.$t,
            transfers: data.feed.entry[i].gsx$transfers.$t,
            other: data.feed.entry[i].gsx$other.$t,
            transparency: data.feed.entry[i].gsx$transparency.$t,
            work: data.feed.entry[i].gsx$work.$t,
            accessibility: data.feed.entry[i].gsx$accessibility.$t,
            diversity: data.feed.entry[i].gsx$diversity.$t,
            transportation: data.feed.entry[i].gsx$transportation.$t,
            internationalstudents: data.feed.entry[i].gsx$internationalstudents.$t,
            springadmits: data.feed.entry[i].gsx$springadmits.$t,
            budget: data.feed.entry[i].gsx$budget.$t
            
    
			// etc.
		}

    }
    
}

