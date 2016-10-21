// JavaScript Document

$("#name").change(function(){
$("#contactIframe").contents().find("#content_contact1_txtName_I").val($("#name").val());

});

$("#email").change(function(){
$("#contactIframe").contents().find("#content_contact1_txtEmail_I").val($("#email").val());

});

$("#phone").change(function(){
$("#contactIframe").contents().find("#content_contact1_txtTelephone_I").val($("#phone").val());

});

$("#msg").change(function(){
$("#contactIframe").contents().find("#content_contact1_txtComments_I").val($("#msg").val());

});

$("#msg").focus(function(){
  if ($(this).val() == "Message:"){
    $(this).val("");  
  }
  
  });

$("#msg").focusout(function(){
  if ($(this).val() == ""){
    $(this).val("Message:");  
  }
  
  });

$("#send").click(function(){
var valid = 0;

if ($("#name").val() != ""){
  $("#name").css("border", "none");
}else{
  $("#name").css("border", "1px solid red");
  valid++;
}

if ($("#email").val() != ""){
  $("#email").css("border", "none");
}else{
  $("#email").css("border", "1px solid red");
  valid++;
}

if ($("#phone").val() != ""){
  $("#phone").css("border", "none");
}else{
  $("#phone").css("border", "1px solid red");
  valid++;
}


if (valid == 0){
$("#contactIframe").contents().find("#content_contact1_btnSubmit_CD").click();
$("#inputBox1").html("<center style='display: block;'><h3 style='color:#333;'>Thank You!</h3><p style='color: #333;'>A representative will contact you shortly.</p></center>");
$("#inputBox2").css("opacity", "0");
$("#send").hide();


}

});
