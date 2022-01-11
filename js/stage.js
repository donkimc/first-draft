$(document).ready(function () {
  $('#codeBtn').click(function(e){

    e.preventDefault();
    var asw = $('#answer1').val();

    if (asw == 'LILY') {
      console.log('correct');
      window.location.href = "./stage2-1.html";
    } else {
      $('#hintOverlay').css({display: "block"});
    }
  });

  $('#hintCloseBtn').click(function(){
    $('#hintOverlay').css({display: "none"});
  });
});
