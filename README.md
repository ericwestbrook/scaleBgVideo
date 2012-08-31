scaleBgVideo
============

scaleBgVideo is a simple jQuery tool to use an HTML5 video as a looping background image. The tool scales the video on page load to fit the viewport window and any time the window is resized.

It is currently only intended for backgrounds that should fill the whole window.

Usage:

1) Add scaleBgVideo.js to your document head

2) Add your video source directly after the head or your document or wherever else makes sense in your circumstances. Give the video element an ID of 'bgVideo'.

3) Add the desired attributes to your video tag. You will most likely want: preload="auto", loop, & muted. Play isn't necessary as the script handles this.

4) If you want your video to be positioned statically, give it a class of 'staticBg'.

That's it!

Notes & Tips:

- Keep your video files small enough to not keep 'em waiting.
- Use the muted param if you want 'em to ever come back to your site again.
- iOS and Android disable autoplay and there's no getting around it. Add a play control button if you want to give the option to play manually. Though on iPhone, the video will take over the screen entirely.