$(document).ready(function(){
    if (document.images) {
        img1 = new Image();
        img1.src = "img/covers/main1.png";
        img2 = new Image();
        img2.src = "img/covers/main2.png";
        img3 = new Image();
        img3.src = "img/covers/main3.png";
        img4 = new Image();
        img4.src = "img/covers/main4.png";
    }
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("featured_slide");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
});