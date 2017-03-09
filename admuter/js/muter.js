function checkAd(){
    var muted = false;
    var mutedBtn = $(".volume-bar").find("button");
    $(".now-playing-bar").arrive("a", function() {
        var target = $(this).attr("target");
        if (typeof target !== typeof undefined && target !== fals    e && !muted){
            mutedBtn.click();
            muted = !muted;
        }
    });
    //var muted = false;
    //var should_click = false;
    //var mutedBtn = $(".volume-bar").find("button");
    //var muted = (mutedBtn.attr("class").indexOf("off") !== -1);
    /*var anchors = $(".now-playing-bar").find("a").slice(0, 2);
    anchors.each(function(){
        var target = $(this).attr("target");
        if (typeof target !== typeof undefined && target !== false && !muted){
            should_click = true;
        }
        else if ((typeof target === typeof undefined || target === true) && muted){
        should_click = true;
        }
    });*/

    /*if (should_click){
        console.log("Clicking mute Btn");
        mutedBtn.click();
    }
    setTimeout(function(){checkAd();}, 1000);*/
}

checkAd();
