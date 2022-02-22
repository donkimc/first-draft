$(document).ready(function () {

  var txtErr = "<p style='color:red; font-size: 0.8em; margin-bottom: -2em;'>코드를 잘못 입력 되었습니다. <br> 다시 확인하고 입력해 주세요.</p>";
  // $('#infoButton').click(function(e){
  //   e.preventDefault();
  //   $('#infoOverlay').load('./common/info.html');
  //   $('#infoOverlay').css({display: "block"});
  //   // $('#infoModal').css({display: "block"});
  // });
  //
  // $('#closeBtn').click(function(e){
  //   e.preventDefault();
  //   $('#infoOverlay').css({display: "none"});
  // });

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
      $("#codeInput").val("")
    }
    console.log('done');
  });

  $('#startBtn').click(function(e){
    e.preventDefault();
    window.location.href = "./stage1-1.html";
  });
});
