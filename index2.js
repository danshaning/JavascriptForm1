
$(document).ready(function(){

    alert("Veuillez remplir ce formulaire dans l'ordre");

    //All the input have a minimum 5 character
    $('.inputClass2').keyup(function () {
        if ($(this).val().length < 5){
            $(this).css({
                borderColor : 'red'
            });
        }else {
            $(this).css({
                borderColor: 'green'
            });
        }
    });

    //managing the hidden text
    $('#pseudo').keyup(function () {
        if ($(this).val().length < 5){
            $('.hiddenText1').css({
                visibility :'visible'
            });
        }else {
            $('.hiddenText1').css({
                visibility :'hidden'
            });
        }
    });


    //Making sure the password is entered correctly
    $('#confirm').keyup(function () {
        if ($('#confirm').val() !== $('#mdp').val()){
            $("#confirm, #mdp").css({
                borderColor : 'red'
            });
            $('.hiddenText2').css({
                visibility :'visible'
            });
        }else {
            $("#confirm, #mdp").css({
                borderColor: 'green'
            });
            $('.hiddenText2').css({ 
                visibility :'hidden'
            });
        }
    });



    //Making sure all requirements are met before sending the form

    $('.inputClass1').keyup(function () {
        if (($('#confirm').val() == $('#mdp').val())&& (!($('#confirm, #mdp').val() == "")) && ($('#mail').val().length >= 8) && ($(this).val().length >= 5)) {
            $('#envoi').removeAttr('disabled');
        }else{
            $('#envoi').attr('disabled','disabled');
        }
    });

    

});

//what happen when the form is sent
function validation(){
   // $('.inputClass1, .inputClass2').textContent = "";
    alert("Thank you for your entry");
    
}









