function checkAdTwitch(){
    // Hard to get it to skip ad with button click
    // because skip ad button is in iframe. cant work out how to access
    // turns out you can just delete the iframe and the ad stops lol
    // But feels really hacky and id rather avoid if possible
    // current best solution is mute ad and hide the frame
    var skip = true;
    var should_click = false;
    var mutedBtn = $(".mute-button");
    var muted = $(".player-volume__slider").find("div").css("width") == "0px";
    var player = $("#player");
    var ad_on = player.attr("data-screen") == "advertisement"; // always exists. but text empty when no add
    //var can_skip_btn = $(".videoAdUiSkipButton"); cannot find because inside iframe (cross content issues)
    if (ad_on && skip){
        $(".player-video").find("iframe").hide()
        //can_skip_btn.click();
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
