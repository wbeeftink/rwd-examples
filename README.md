# Responsive webdesign

This repository contains the source code for the examples used in our presentation about responsive webdesign at the TYPO3 congress 2012 in Almere, The Netherlands.

![image](http://i50.tinypic.com/8zl3ci.png)

Presentation by:

* Vincent Kessels
* Wouter Beeftink [@wbeeftink](https://twitter.com/wbeeftink)
* ROQUIN [@ROQUINwebsites](https://twitter.com/ROQUINwebsites)

## Examples

[Check out the demo](http://wbeeftink.github.io/rwd_examples/). This repository contains these examples:

* `grid_fixed.html` - A fixed grid
* `grid_fluid.html` - A fluid grid
* `image.html` - A non-flexible image
* `image_flexible.html` - A flexible image
* `video.html` - A non-flexible video
* `video_flexible.html` - A flexible video using [FitVids.js](https://github.com/davatron5000/FitVids.js)
* `grid_fluid_media_queries.html` - A fluid grid with media queries

All examples were tested to work in all modern browsers. To get media queries to work in IE8 and lower you'll have to include a polyfill like [respond.js](https://github.com/scottjehl/Respond).

## Presentation

You can find the video of our presentation [here](http://vimeo.com/54006547) and the slides [here](http://www.slideshare.net/TYPO3Nederland/2-responsive-webdesign?ref=http://www.typo3congres.nl/programma/responsive-webdesign/). Please note that the presentation is in Dutch.

## TypoScript

We use [this TypoScript setup](css_styled_content.ts) to strip images of the width and height set inline. It's mostly similar to the default setup but without all the inline styles. The max-width set on the captions is left intact.

**Note:** We use TYPO3 4.5. I believe this configuration is unnecessary for newer versions.