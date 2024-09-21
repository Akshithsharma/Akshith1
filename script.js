// Start the camera and stream video to a video element
document.getElementById('startCamera').addEventListener('click', function() {
    const video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.style.width = '100%';

    document.querySelector('.content').appendChild(video);

    // Access the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;

            // Placeholder for actual emotion detection
            video.onloadeddata = () => {
                alert('Emotion detection started...');

                // Simulate emotion detection (replace with actual detection logic)
                setTimeout(() => {
                    alert('Emotion detected: Relaxed');
                    document.getElementById('proceedBtn').disabled = false; // Enable the "Proceed to Videos" button
                    document.getElementById('proceedBtn').addEventListener('click', function() {
                        window.location.href = 'intermediate.html'; // Redirect to intermediate page
                    });
                }, 2000); // Simulate a delay for detection
            };
        })
        .catch(error => {
            console.error('Error accessing the camera:', error);
        });
});
