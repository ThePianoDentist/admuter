switch (window.location.hostname){
    case "open.spotify.com":
        checkAdSpotify();
        break;
    case "www.youtube.com":  // are there non www urls/hosts?
        checkAdYoutube();
        break;
    case "www.twitch.tv":
        checkAdTwitch();
        break;
}
