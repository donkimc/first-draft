$(document).ready(function() {

  $('#codeBtn').click(function(e) {
    e.preventDefault();
    checkAnswer();
  });

  $('#answer').keyup(function(event) {
    if (event.keyCode === 13) {
      checkAnswer();
    }
  });

  $('#hintCloseBtn').click(function() {
    setTimeout(function() {
      $('#hintOverlay').css({
        display: "none"
      });
    }, 600);
  });

  // stage 4
  $('#ticketNextBtn').click(function() {
    $.getJSON("./answers.json", function(data) {
      var page_index = $("#answer").attr("index");
      $('#ticketOverlay').css({
        display: "none"
      });
      window.location.href = "./" + data.answers[page_index].page;
    });
  });

  // stage 6
  $('#dangerBtn').click(function() {
    $.getJSON("./answers.json", function(data) {
      var page_index = $("#answer").attr("index");
      $('#dangerOverlay').css({
        display: "none"
      });

      $('#dotDisplay').css({
        display: "flex"
      });

      setTimeout(function() {
        window.location.href = "./" + data.answers[page_index].page;
      }, 4000);
    });
  });


});

function checkAnswer() {
  // page_index variable - stage_1 value is 0 and stage_2 value is 1 etc.
  var page_index = $("#answer").attr("index");
  $.getJSON("./answers.json", function(data) {

    if ($('#answer').val() == data.answers[page_index].answer) {
      console.log('correct');
      // stage 1
      if (page_index == 0) {
        setTimeout(function() {
          $('#loadingOverlay').css({
            display: "block"
          });
        }, 600);
        setTimeout(function() {
          window.location.href = "./" + data.answers[page_index].page;
        }, 4000);
      }
      //stage 4
      else if (page_index == 3) {
        setTimeout(function() {
          $('#ticketOverlay').css({
            display: "block"
          });
          $('#ticketNextBtn').css({
            display: "none"
          });
        }, 600);
        // hide button until animation finishs
        setTimeout(function() {
          $('#ticketNextBtn').css({
            display: "block"
          });
        }, 4000);
      }
      // stage 6
      else if (page_index == 5) {
        setTimeout(function() {
          $('#dangerOverlay').css({
            display: "block"
          });
        }, 600);
      } else {
        // button animation runs for 0.6s
        setTimeout(function() {
          window.location.href = "./" + data.answers[page_index].page;
        }, 600);

      }
    } else {
      setTimeout(function() {
        $('#hintOverlay').css({
          display: "block"
        });
      }, 600);
    }
  });
}
