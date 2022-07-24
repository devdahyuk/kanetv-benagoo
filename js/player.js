var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('player', {
    videoId: 'tB0sBzM_15E',
    playerVars: { 'autoplay': 1, 'loop': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
      'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();
}
