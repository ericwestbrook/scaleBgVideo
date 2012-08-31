scaleBgVideo
============

scaleBgVideo is a simple jQuery tool to use an HTML5 video as a looping background image. The tool scales the video on page load to fit the viewport window and any time the window is resized.

It is currently only intended for backgrounds that should fill the whole window.

Usage:

1) Add scaleBgVideo.js to your document head

2) Add your video source directly after the head or your document or wherever else makes sense in your circumstances. Give the video element an ID of 'bgVideo'.

3) Add the desired attributes to your video tag. You will most likely want: preload="auto", autoplay, loop, & muted.

4) If you want your video to be positioned statically, give it a class of 'staticBg'.

That's it!