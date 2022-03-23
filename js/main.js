$(document).ready(function() {
  $('#codeBtn').click(function(e) {
    e.preventDefault();
    checkCode();
  });

  $('#codeInput').keyup(function(event) {
    if (event.keyCode === 13) {
      checkCode();
    }
  });

  $('#startBtn').click(function(e) {
    e.preventDefault();
    window.location.href = "./stage1-1.html";
  });
});

function checkCode() {
  var txtErr = "<p style='color:red; font-size: 0.8em; margin-bottom: -2em;'>코드를 잘못 입력 되었습니다. <br> 다시 확인하고 입력해 주세요.</p>";
  var code = $('#codeInput').val();
  if (code == '181818') {
    console.log('correct');
    window.location.href = "./start.html";
  } else {
    $('#codeError').html(txtErr);
    setTimeout(function() {
      $('#codeError').html("")
    }, 3000);
    $("#codeInput").val("")
  }
}
