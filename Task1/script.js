$(document).ready(function(){
        $flag=1;
        /* Fname and Lname validation*/

        $('.txtOnly').keypress(function (e) {
			var regex = new RegExp("^[a-zA-Z]+$");
			var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
			if (regex.test(str)) {
				return true;
			}
			else
			{
			e.preventDefault();
			$('.error').show();
			$('.error').text('Please Enter a valid first name');
			return false;
            }
        }); 
        /*fname*/
    	$("#fname").focusout(function(){
    		if($(this).val()==''){
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#e_fname").text("* You have to enter your first name!");
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#e_fname").text("");

        	}
       });

       /*lname*/
        $("#lname").focusout(function(){
    		if($(this).val()==''){
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#e_lname").text("* You have to enter your Last name!");
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#e_lname").text("");
        	}
       });

       /*email validation */
       function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
        $("#email").focusout(function(){
    		var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$(".e_email").text("* You have to enter a valid email address!");
            }
            if (validateEmail(sEmail)) {
                $(this).css("border-color", "green");
                $('#submit').attr('disabled',false);
        		$(".e_email").text("");
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
    if ($("#fname").val() == '') {
        $("#fname").css("border-color", "red");
        $('#submit').attr('disabled', true);
        $("#e_fname").text("* You have to enter your first name!");
    }
    if ($("#lname").val() == '') {
        $("#lname").css("border-color", "red");
        $('#submit').attr('disabled', true);
        $("#e_lname").text("* You have to enter your Last name!");
    }
    
    if ($("#email").val() == '') {
        $("#email").css("border-color", "red");
        $('#submit').attr('disabled', true);
        $(".e_email").text("* You have to enter your email !");
    }

    

if ($("#phoneno").val() == '') {
$("#phoneno").css("border-color", "red");
$('#submit').attr('disabled', true);
$("#e_phoneno").text("* You have to enter your phoneno !");

}
if ($("#country").val() == '') {
$("#country").css("border-color", "red");
$('#submit').attr('disabled', true);
$("#e_country").text("Select anyone!");
}
if ($("#city").val() == '') {
$("#city").css("border-color", "red");
$('#submit').attr('disabled', true);
$("#e_city").text("Select anyone!");
}
if ($("#state").val() == '') {
$("#state").css("border-color", "red");
$('#submit').attr('disabled', true);
$("#e_state").text("Select anyone!");
}
if (!$("input[name='Pass']:checked").val()) {
    $("#pass").css("border-color", "red");
    $('#submit').attr('disabled', true);
    $(".e_pass").text("Select anyone!");

}

});



});





        
         
         
  
  