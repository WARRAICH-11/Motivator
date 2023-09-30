function playSong(audioFile) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = audioFile;
    audioPlayer.play();
}
