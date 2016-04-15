$(document).ready(function() {
    $('.error').hide();
    $('.error2').hide();
    $('.error3').hide();

  $('#btnSubmit').click(function(event){

     var dtVal=$('#txtDate').val();
     var dtVal2=$('#password').val();
     console.log(dtVal2);
     ValidateDate(dtVal)
     if(ValidateDate(dtVal)) {
        $('.error').hide();
     } else {
       $('.error').show();
       event.preventDefault();
     }
     var dtVal3 = $('#fname').val();
     validatePassword(dtVal2);
     userCheck(dtVal3);
  });


  function ValidateDate(dtValue) {
    var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
    return dtRegex.test(dtValue);
  };

  function validatePassword(x){
      if (x != '12345') { 
        $('.error2').show();
      }
    };

  function userCheck(){
         dtVal3 = $('#fname').val();
        if(dtVal3 == ""){
          $('.error3').show();
        } else {
           $('.error3').hide();
        }
      }
  });

$(document).keypress(function(event){
  $('#key')[0].innerText = String.fromCharCode(event.which);

  var tmp = String.fromCharCode(event.which);
  if(/[a-z]/.test(tmp)){
    $('h1').html('This is a letter!');
  }else if(/\d/.test(tmp)){
    $('h1').html('This is a number!');
  }
})  

