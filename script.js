// navigation for menu bar
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuPanel = document.getElementById("menuPanel");

    menuIcon.addEventListener("click", function () {
        menuPanel.classList.toggle("active");
    });
});





// image rotation (7 sec) & 3 buttons below images for users to select images
document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const menuPanel = document.getElementById("menuPanel");

    menuIcon.addEventListener("click", function () {
        menuPanel.classList.toggle("active");
    });

    // Image Rotation
    const images = ["teamPhoto1.png", "teamPhoto2.png", "teamPhoto3.png"];
    let currentIndex = 0;
    const imgElement = document.getElementById("teamPhoto");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    setInterval(changeImage, 7000); // Change every 7 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const menuPanel = document.getElementById("menuPanel");

    menuIcon.addEventListener("click", function () {
        menuPanel.classList.toggle("active");
    });

    // Image Rotation & Manual Selection
    const images = ["teamPhoto1.png", "teamPhoto2.png", "teamPhoto3.png"];
    let currentIndex = 0;
    const imgElement = document.getElementById("teamPhoto");
    const indicators = document.querySelectorAll(".indicator");
    let interval;

    function changeImage(index) {
        currentIndex = index;
        imgElement.src = images[currentIndex];

        // Update active indicator
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === currentIndex);
        });
    }

    function autoChangeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }

    // Start automatic image rotation
    function startSlideshow() {
        interval = setInterval(autoChangeImage, 7000);
    }

    // Click event for manual image selection
    indicators.forEach((indicator) => {
        indicator.addEventListener("click", function () {
            clearInterval(interval); // Stop auto-change on user interaction
            changeImage(parseInt(this.getAttribute("data-index")));
            startSlideshow(); // Restart slideshow after user interaction
        });
    });

    // Initialize slideshow
    changeImage(0);
    startSlideshow();
});
