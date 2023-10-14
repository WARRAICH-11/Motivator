function playSoundAndSong(songFileName) {
    // Get the audio element by its id for the click sound
    var clickSound = document.getElementById("clickSound");

    // Get the audio element by its id for the song
    var audioPlayer = document.getElementById("audioPlayer");

    // Set the source of the audio element for the song
    audioPlayer.src = songFileName;

    // Play the click sound
    clickSound.play();

    // Play the song
    audioPlayer.play();
}

// JavaScript code to handle header animation on scroll
var lastScrollTop = 0;



window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector('.header').classList.add('minimized');
        document.querySelector('.logo').classList.add('minimized');
        document.querySelector('.header h1').classList.add('minimized');
    } else {
        // Scrolling up
        document.querySelector('.header').classList.remove('minimized');
        document.querySelector('.logo').classList.remove('minimized');
        document.querySelector('.header h1').classList.remove('minimized');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
