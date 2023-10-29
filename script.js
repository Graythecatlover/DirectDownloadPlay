$(document).ready(function() {
    // Get reference to the video element
    var video = document.querySelector('video');
  
    // Add event listener to the play button
    $('#playButton').on('click', function() {
        // Get the value from the url input field
        var url = $('#urlInput').val();
      
        // Check if the url is valid
        if (url) {
            // Load the video into the video element
            video.src = url;
          
            // Play the video
            video.play();
        } else {
            alert("Please enter a valid URL");
        }
    });
});
