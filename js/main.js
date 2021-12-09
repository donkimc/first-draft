$(document).ready(function () {
  // when code is entered
  // console.log('ready22');
  // $('#code-form').submit(function(e){

  // $('#info-button').click(function(){
  //   console.log('info-clicked');
  //   $('#info-popup').load('./common/info.html');
  // });

  var txtErr = "<p style='color:red; font-size: 0.8em; margin-bottom: -2em;'>코드를 잘못 입력 되었습니다. <br> 다시 확인하고 입력해 주세요.</p>";
  $('#infoButton').click(function(){
    $('#infoOverlay').css({display: "block"});
  });

  $('#closeBtn').click(function(){
    $('#infoOverlay').css({display: "none"});
  });

  $('#codeBtn').click(function(e){
    e.preventDefault();
    var code = $('#codeInput').val();

    if (code == '181818') {
      console.log('correct');
      window.location.href = "./start.html";
    }
    else {
      // alert('Wrong password, Correct password is 181818.');
      $('#codeError').html(txtErr);
      setTimeout(function(){$('#codeError').html("")},3000);
    }
    console.log('done');
  });

  $('#startBtn').click(function(e){
    e.preventDefault();
    alert('not implemented yet');
  });


});



// $('#info-button').click(function(){
//   $('#info-overlay').css({display: "block"});
// });
//
// $('#closeBtn').click(function(){
//   $('#info-overlay').css({display: "none"});
// });
