function checkAdTwitch(){
    var should_click = false;
    var mutedBtn = $(".mute-button");
    var muted = $(".player-volume__slider").find("div").css("width") == "0px";
    var ad_on = $("#player").attr("data-screen") == "advertisement"; // always exists. but text empty when no add
    var can_skip_btn = $(".videoAdUiSkipButton");
    if (can_skip_btn.length > 0){
        can_skip_btn.click();
    }
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
    setTimeout(function(){checkAdTwitch();}, 500);
}
