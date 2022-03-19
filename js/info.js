
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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener("load",function() {
//     setTimeout(function(){
//         // This hides the address bar:
//         window.scrollTo(0, 1);
//     }, 0);
// });
