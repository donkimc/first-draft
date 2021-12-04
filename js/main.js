$(document).ready(function () {
  // when code is entered
  // console.log('ready22');
  // $('#code-form').submit(function(e){

  // $('#info-button').click(function(){
  //   console.log('info-clicked');
  //   $('#info-popup').load('./common/info.html');
  // });

  $('#info-button').click(function(){
    $('#info-overlay').css({display: "block"});
  });

  $('#closeBtn').click(function(){
    $('#info-overlay').css({display: "none"});
  });

  $('#code_button').click(function(e){
    e.preventDefault();
    var code = $('#code_input').val();

    if (code == '181818') {
      console.log('correct');
      window.location.href = "./start.html";
    }
    else {
      alert('Wrong password, Correct password is 181818.');
    }
    console.log('done');
  });

  $('#start_button').click(function(e){
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
