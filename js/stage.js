
$(document).ready(function () {
  $('#codeBtn').click(function(e){
    e.preventDefault();
    // page_index variable - stage_1 value is 0 and stage_2 value is 1 etc.
    var page_index=$("#answer").attr("index");
    console.log(page_index);
    $.getJSON("./answers.json", function(data) {
      // console.log('clicked');
      // test
      // console.log(data.answers[page_index].answer);
      // console.log($('#answer').val());
      // var ans = ($('#answer').val() === undefined) ? $('#answer').val() : null;
      // console.log(ans);
      if ($('#answer').val() == data.answers[page_index].answer) {
        console.log('correct');
        if (page_index == 3) {

          $('#ticketOverlay').css({display: "block"});
        } else {
          window.location.href = "./"+data.answers[page_index].page;
        }
      } else {
        $('#hintOverlay').css({display: "block"});
      }
    });
  });

  $('#hintCloseBtn').click(function(){
    $('#hintOverlay').css({display: "none"});
  });

  $('#ticketNextBtn').click(function(){
    $.getJSON("./answers.json", function(data) {
      var page_index=$("#answer").attr("index");
      console.log(page_index);
      $('#ticketOverlay').css({display: "none"});
      window.location.href = "./"+data.answers[page_index].page;
    });
  });

});
