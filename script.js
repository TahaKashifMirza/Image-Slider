document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel img');
    let index = 0;
    let intervalId;

    function showImage(indexToShow) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        // Show the specified image
        images[indexToShow].classList.add('active');
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    function startSlideshow() {
        intervalId = setInterval(nextImage, 3000);
    }

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    document.getElementById('prevArrow').addEventListener('click', function() {
        prevImage();
    });

    document.getElementById('nextArrow').addEventListener('click', function() {
        nextImage();
    });

    // Start the slideshow when the page loads
    startSlideshow();

    // Pause slideshow on hover
    document.querySelector('.carousel').addEventListener('mouseover', stopSlideshow);
    document.querySelector('.carousel').addEventListener('mouseout', startSlideshow);
});
