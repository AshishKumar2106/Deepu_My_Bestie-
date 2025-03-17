const photos = [
    "deepti1.jpg",
    "deepti2.jpg",
    "deepti3.jpg",
    "deepti4.jpg",
    "deepti5.jpg",
    "deepti6.jpg",
    "deepti7.jpg",
    "deepti8.jpg",
    "deepti9.jpg",
    "deepti10.jpg",
    "deepti11.jpg", 
    "deepti12.jpg",
    "deepti.jpg" 
    // Add more images here if you have them, e.g., "deepti4.jpg"
];

let photoIndex = 0;

const galleryPhoto = document.getElementById("galleryPhoto");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function() {
    photoIndex = (photoIndex + 1) % photos.length; // Cycle through photos
    galleryPhoto.src = photos[photoIndex];
});