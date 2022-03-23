$(function() {
  $('#infoModal').load('./common/info.html');
  $(document).on('click', '#infoButton', function(e) {
    e.preventDefault();
    $('#infoOverlay').css({
      display: "block"
    });
  });
  $(document).on('click', '#closeBtn', function(e) {
    e.preventDefault();
    $('#infoOverlay').css({
      display: "none"
    });
  });
});
