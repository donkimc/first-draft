
$(function() {
  // let h = window.innerHeight;
  // $('body').css({height: h});
  $('#infoModal').load('./common/info.html');
  $(document).on('click', '#infoButton', function(e) {
    e.preventDefault();
    $('#infoOverlay').css({display: "block"});
  });
  $(document).on('click', '#closeBtn', function(e) {
    e.preventDefault();
    $('#infoOverlay').css({display: "none"});
  });
});


// window.addEventListener("load",function() {
//     setTimeout(function(){
//         // This hides the address bar:
//         window.scrollTo(0, 1);
//     }, 0);
// });
