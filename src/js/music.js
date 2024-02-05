document.addEventListener("DOMContentLoaded", function () {
    var youtubePlayer;
    var playPauseButton = document.querySelector('#btnMute');

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        youtubePlayer = new YT.Player('#youtube', {
            events: {
                'onReady': onPlayerReady
            }
        });
    };

    function onPlayerReady(event) {
        playPauseButton.addEventListener('click', function () {
            if (youtubePlayer.getPlayerState() === 1) {
                youtubePlayer.pauseVideo();
            } else {
                youtubePlayer.playVideo();
            }
        });
    }
});