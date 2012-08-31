function styleVideo() {
  var target = '#bgVideo';
  $('body').css({'width' : '100%', 'height' : '100%', 'overflow-x' : 'hidden'});
  $(target).wrap('<div id="videoWrap" />');
  $('#videoWrap').css({'width' :'100%', 'height' : '100%', 'top' : '0', 'left' : '0', 'overflow-x' : 'hidden', 'z-index' : '-1'});
  if ($(target).hasClass('staticBg')) {
    $('#videoWrap').css({'position' : 'static'});
  }
  else {
    $('#videoWrap').css({'position' : 'absolute'});
  }
  $(target).css({'display' : 'block', 'height' : '100%', 'margin' : '0 auto', 'overflow-x' : 'hidden'});
  $(target).get(0).play();
}

//Scales background videos to browser window
function scaleBgVideo() {
  var target = '#bgVideo';
  var vidWidth = $(target).width();
  var vidHeight = $(target).height();
  var myWidth = $(window).width();
  var myHeight = $(window).height();
  if (myWidth > vidWidth) {
    $(target).css({ 'width' : myWidth, 'height' : 'auto'});
  }
  else if (myWidth < vidWidth) {
    $(target).css({ 'width' : 'auto', 'height' : '100%'});
  }
}

$(window).load(function() {
  styleVideo();
  scaleBgVideo();
});

$(window).resize(function() {
  scaleBgVideo();
});
