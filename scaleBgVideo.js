function styleVideo() {
  var target = '#bgVideo';
  if ($(target).hasClass('staticBg')) {
    $(target).css({'position' : 'static'});
  }
  else {
    $(target).css({'position' : 'absolute'});
  }
  $(target).css({'display' : 'block', 'height' : '100%', 'margin' : '0 auto', 'overflow-x' : 'hidden'});
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
