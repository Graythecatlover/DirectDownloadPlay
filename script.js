// script.js
function uploadVideo() {
    // Get the selected file
    var file = document.getElementById("file").files[0];
    
    // Create a FormData object and append the file to it
    var data = new FormData();
    data.append('file', file);
    
    // Send the request to the server
    $.ajax({
        url: 'upload_video.php',
        type: 'POST',
        data: data,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
            console.log(data);
            
            // Update the page with the newly uploaded video
            $('#player').empty().append(`
                <video controls>
                    <source src="${data}" type="video/mp4">
                </video>
            `);
        }
    });
}
