# Responsive webdesign

This repository contains the source code for the examples used in our presentation about responsive webdesign at the TYPO3 congress 2012 in Almere, The Netherlands.

![image](http://i50.tinypic.com/8zl3ci.png)

Presentation by:

* Vincent Kessels
* Wouter Beeftink [@wbeeftink](https://twitter.com/wbeeftink)
* ROQUIN [@ROQUINwebsites](https://twitter.com/ROQUINwebsites)

## Examples

This repository contains these examples:

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

We use this `css_styled_content` setup to strip images of the width and height set inline. It's mostly similar to the default setup but without all the inline styles. The max-width set on the captions is left intact.

**Note:** We use TYPO3 4.5. I believe this configuration is unnecessary for newer versions.

    tt_content.image.20 {

        renderMethod = div

        imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap"> | </div>
        imageStdWrapNoWidth.wrap = <div class="csc-textpic-imagewrap"> | </div>
        imageColumnStdWrap.dataWrap = <div class="csc-textpic-imagecolumn" style="width: {register:columnwidth}px;"> | </div>

        layout = CASE
        layout {
            key.field = imageorient
            default = TEXT
            default.value = <div class="csc-textpic csc-textpic-center csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
            1 = TEXT
            1.value = <div class="csc-textpic csc-textpic-right csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
            2 = TEXT
            2.value = <div class="csc-textpic csc-textpic-left csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
            8 = TEXT
            8.value = <div class="csc-textpic csc-textpic-center csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
            9 = TEXT
            9.value = <div class="csc-textpic csc-textpic-right csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
            10 = TEXT
            10.value = <div class="csc-textpic csc-textpic-left csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
            17 = TEXT
            17.value = <div class="csc-textpic csc-textpic-intext-right###CLASSES###">###IMAGES######TEXT###</div>
            18 = TEXT
            18.value = <div class="csc-textpic csc-textpic-intext-left###CLASSES###">###IMAGES######TEXT###</div>
            25 = TEXT
            25.value = <div class="csc-textpic csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES###<div>###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
            25.insertData = 1
            26 = TEXT
            26.value = <div class="csc-textpic csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES###<div>###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
            26.insertData = 1
        }

        rendering {
            div {
                imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" > | </div>
                imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last" > | </div>
                noRowsStdWrap.wrap =
                oneImageStdWrap.dataWrap = <div class="csc-textpic-image###CLASSES###" > | </div>
                imgTagStdWrap.wrap = |
                editIconsStdWrap.wrap = |
                caption.wrap = <div class="csc-textpic-caption" style="max-width: {register:imagewidth}px;"> | </div>
                caption.wrap.insertData = 1
            }
        }
    }