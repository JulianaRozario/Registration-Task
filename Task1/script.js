
var isFormFieldError = false ; 

/* Form field validation */

function validatName(fieldObject,errorContainerObject,fieldErrorMesage) {

	var returnFlag = false;
	var alphabetsOnlyPattern = new RegExp("^[a-zA-Z]+$");
	var name = $(fieldObject).val();
	
	if (alphabetsOnlyPattern.test(name)) {
		returnFlag = true;
	}
	else
	{
		$(errorContainerObject).show();
		$(errorContainerObject).text(fieldErrorMesage);
	}
	return returnFlag;
}





$(document).ready(function(){
        $flag=1;
        /* Fname and Lname validation*/

        /*fname*/
    	$("#fname").focusout(function(){
    		if($(this).val()==''){
        		$(this).css("border-color", "#FF0000");
        		$('#submit').attr('disabled',true);
        		$("#e_fname").text("* You have to enter your first name!");
				isFormFieldError = true;
        	} else if($(this).val()!='') {
				validatName(this,$("#e_fname"),"Invalid first name");
				isFormFieldError = true;
			}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#e_fname").text("");
				isFormFieldError = false;

        	}
       });

       /*lname*/
        $("#lname").focusout(function(){
    		if($(this).val()==''){
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#e_lname").text("* You have to enter your Last name!");
					isFormFieldError = true;
        	}else if($(this).val()!='') {
				validatName(this,$("#e_lname"),"Invalid last name");
				isFormFieldError = true;
			}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#e_lname").text("");
				isFormFieldError = false;
        	}
       });

       /*email validation */
       function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return filter.test(sEmail);
	   }
        $("#email").focusout(function(e){
    		var sEmail = $('#email').val();
			if ($.trim(sEmail).length == 0) {
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$(".e_email").text("* You have to enter a valid email address!");
					isFormFieldError = true;
            }
            if (validateEmail(sEmail)) {
                $(this).css("border-color", "green");
                $('#submit').attr('disabled',false);
        		$(".e_email").text("");
				isFormFieldError = true;
            }
        	else
        	{
        		$('#submit').attr('disabled',true);
        		$(".e_email").text("Invalid Email");
            e.preventDefault();
        }
    });
/*contactno*/
        $("#contactno").focusout(function(){
            $pho =$("#contactno").val();
    		if($(this).val()==''){
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#e_contactno").text("* You have to enter your Phone Number!");
        	}
        	/*else if ($pho.length!=10)
        	{   
                    $(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#e_contactno").text("* Lenght of Phone Number Should Be Ten");
        	}*/
        	else if(!$.isNumeric($pho))
        	{
        	        $(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#e_contactno").text("* Phone Number Should Be Numeric");  
        	}
        	else{
        		$(this).css({"border-color":"#2eb82e"});
        		$('#submit').attr('disabled',false);
        		$("#e_contactno").text("");
            }
            
        });
            
   /* Dropdown Validaton */
   var countriesArray =  ['India','Us'];

   $.each(countriesArray, function(index, element){
   
     $("#country").append("<option value='"+element+"'>" +element+ "</option>");
   
   });
   
   var statesObj = {
       "India" : ["TamilNadu", "Kerala"],
        "Us" : ["New_Jersy","Texas"]
  };

  $("#country").on("change",function(){
    var statesArr = statesObj[($("#country").val())];
		$("#state").empty();
		$("#state").append("<option selected>Choose...</option><option>...</option>");
        $.each(statesArr, function(index, element){
        $("#state").append("<option value='"+element+"'>" +element+ "</option>");
        });
    });
    var citiesObj = {
        "TamilNadu" : ["chennai", "trichy"],
        "Kerala" : ["cochin","trivandrum"],
        "New_Jersy" : ["Newark","Pennsylvania"],
        "Texas": ["A","B"]
      };
      $("#state").on("change",function(){
		$("#city").empty();
		$("#city").append("<option selected>Choose...</option><option>...</option>");
        var citiesArr= citiesObj[$("#state").val()];
            $.each(citiesArr, function(index, element){
              
              $("#city").append("<option value='"+element+"'>" +element+ "</option>");                          
            });

        });
    

    /* radio button */
   /* $("#pass").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
                $('#submit').attr('disabled',true);
                $(".e_pass").text("*Required Field");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $("#submit").attr('disabled',false);
            $(".e_pass").hide(fast);
        }
   }); */

   $("input[type='radio']").change(function () {
    var selection=$(this).val();

    alert("Radio button selection changed. Selected: "+selection);
    });
 
/* Submit button */
   $("#submit").click(function () {
		if(!isFormFieldError) return false;

   });



});





        
         
         
  
  