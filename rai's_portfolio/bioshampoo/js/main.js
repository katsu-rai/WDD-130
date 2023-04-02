/*global $*/

$(function(){
    $(window).scroll(function (){
        $('.left-to-right, .down-to-top, .right-to-left').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
        });
    });
});

$(".order-purchase-button").on("click",function() {
    
    var name = $('#name').val();
    var furigana = $('#furigana').val();
    var address = $('#address').val();
    var pref_name = $('#pref_name').val();
    var city = $('#city').val();
    var tel = $('#tel').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var radio = $("input[name='radio_item']:checked").val();
    
    var error_text_name = "";
    var error_text_furigana = '';
    var error_text_address = '';
    var error_text_pref_name = "";
    var error_text_city = "";
    var error_text_tel = "";
    var error_text_email = "";
    var error_text_password = "";
    var error_text_radio = "";
    var error_text = '';
    
    // if (!name.match(/^[^ -~｡-ﾟ]+$/) && name.trim() !== "") {
    //     error_text_name = '*全角で入力してください';
    // }
    
    // if (!furigana.match(/^[ァ-ヴ　]+$/) && furigana.trim() !== "") {
    //     error_text_furigana = '*フリガナを正しく入力してください';
    // }
    
    // if (!address.match(/^\d{7}$/) && address.trim() !== "" ) {
    //     error_text_address = "*郵便番号を正しく入力してください";
    // }
    
    if (!city.match(/^[^ -~｡-ﾟ]+$/) && city.trim() !== "") {
        error_text_city = '*全角で入力してください';
    }
    
    if (!tel.match(/^0+[0-9]{9,10}$/) && tel.trim() !== "") {
        error_text_tel = '*電話番号を正しく入力してください';
    }
    
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) && email.trim() !== "") {
        error_text_email = '*メールアドレスを正しく入力してください';
    }
    
    if (!password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9.?/-]{4,}$/) && password.trim() !== "") {
        error_text_password = '*パスワードを正しく入力してください';
    }
    
    if (radio == undefined) {
        error_text_radio = '*選択してください';
    }
    
    if (name.trim() === "" || furigana.trim() === "" || address.trim() === "" || pref_name.trim() === "" || city.trim() === "" || tel.trim() === "" || email.trim() === "" || password.trim() === "") {
        error_text = '*未記入の項目があります';
        $('.information-space3').css('display', 'block');
    }
    else {
        error_text = "";
        $('.information-space3').css('display', 'none');
    }
    
    // エラー内容を表示する
    $('#form_has_error_name').text(error_text_name);
    $("#form_has_error_furigana").text(error_text_furigana);
    $("#form_has_error_address").text(error_text_address);
    $("#form_has_error_city").text(error_text_city);
    $("#form_has_error_tel").text(error_text_tel);
    $("#form_has_error_email").text(error_text_email);
    $("#form_has_error_password").text(error_text_password);
    $("#form_has_error_radio").text(error_text_radio);
    $("#form_has_error").text(error_text);
    
    // エラーがなければ送信する
    // if (error_text === '') {
    //$('#contact_form').submit();
    // }
    
});