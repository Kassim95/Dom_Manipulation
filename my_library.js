$(document).ready(function(){
	
$('.error').hide();

$('#btnSubmit').click(function(event){
   var dtVal=$('#txtDate').val();
   var dtVal2=$('#password').val();
   if(ValidateDate(dtVal))
   {
      $('.error').hide();
   }
   else
   {
     $('.error').show();
     event.preventDefault();
   }
   if(ValidatePassword(dtVal2))
   {
      $('.error2').hide();
   }
   else
   {
     $('.error2').show();
       
}





   /////////////////

	function ValidateDate(dtValue)
	{
	var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
	return dtRegex.test(dtValue);
	}

	function validatePassword(x){
		if (x == "12345") {
			console.log("Invalid Password. The password should be 12345!");
		}else {
			console.log("try again");
		}
	};

   });