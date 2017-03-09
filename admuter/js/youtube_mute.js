function checkAdYoutube(){
    var should_click = false;
    var mutedBtn = $(".ytp-mute-button");
    var muted = mutedBtn.next().attr("aria-valuetext").indexOf("muted") !== -1;
    var ad_on = $(".videoAdUiPreSkipButton").length > 0;
    var can_skip_btn = $(".videoAdUiSkipButton");
    if (can_skip_btn.length > 0){
        can_skip_btn.click();
    }
    console.log(ad_on);
    if (ad_on && !muted){
        should_click = true;
    }
    else if (!ad_on && muted){
    should_click = true;
    }

    if (should_click){
        console.log("Clicking mute Btn");
        mutedBtn.click();
    }
    setTimeout(function(){checkAdYoutube();}, 500);
}
