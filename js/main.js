$(document).ready(function () {
  // when code is entered
  console.log('ready');
  // $('#code-form').submit(function(e){
  $('#code_button').click(function(e){
    e.preventDefault();
    var code = $('#code_input').val();

    if (code == '181818') {
      console.log('correct');
    }
    console.log('done');
  });
});
