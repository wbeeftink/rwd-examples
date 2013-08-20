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