
$(document).ready(function () {
  $('#codeBtn').click(function(e){
    e.preventDefault();
    // page_index variable - stage_1 value is 0 and stage_2 value is 1 etc.
    var page_index=$("#answer").attr("value");
    $.getJSON("./answers.json", function(data) {
      // test
      // console.log(data.answers[page_index].answer);
      // console.log($('#answer').val());
      if ($('#answer').val() == data.answers[page_index].answer) {
        console.log('correct');
        window.location.href = "./"+data.answers[page_index].page;
      } else {
        $('#hintOverlay').css({display: "block"});
      }
    })
  });

  $('#hintCloseBtn').click(function(){
    $('#hintOverlay').css({display: "none"});
  });
});
