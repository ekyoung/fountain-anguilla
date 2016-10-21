// JavaScript source code

$("#btn-subscribe-email").click(function () {

    var validInputs = false;

    if ($("#SubscribeFirstName").val() == "") {
        $("#SubscribeFirstName").css("border", "2px solid red");
        validInputs = false;
    } else {
        validInputs = true;
    }

    if ($("#SubscribeLastName").val() == "") {
        $("#SubscribeLastName").css("border", "2px solid red");
        validInputs = false;
    } else {
        validInputs = true;
    }

    if ($("#SubscribeEmail").val() == "") {
        $("#SubscribeEmail").css("border", "2px solid red");
        validInputs = false;
    } else {
        validInputs = true;
    }

    if (validInputs) {
        $("#NewsIfrm").contents().find("#txtName_I").val($("#SubscribeFirstName").val() + $("#SubscribeLastName").val());

        $("#NewsIfrm").contents().find("#txtEmail_I").val($("#SubscribeEmail").val());

        $("#NewsIfrm").contents().find("#btnSumbit").click();

        $("#SubscribeContainer").html('<h3 style="color:white;">Thank You!</h3>');

    }

});