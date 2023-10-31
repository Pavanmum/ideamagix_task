// Add the "loaded" class to the body when the page is fully loaded
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    lazyImages.forEach(function (img) {
        img.addEventListener("load", function () {
            img.removeAttribute("loading");
        });
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function lazyLoad() {
        lazyImages.forEach(function (img) {
            if (isElementInViewport(img)) {
                img.setAttribute("src", img.getAttribute("data-src"));
            }
        });
    }

    lazyLoad();

    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:2
         },
         1000:{
             items:3
         }
     }
 })
   });
 
   $(document).ready(function () {
         $(".owl-carousels").owlCarousel({
             items: 3, // Number of items to show at a time
             loop: true, // Enable infinite loop
             margin: 10, // Margin between items
             responsiveClass: true,
             responsive: {
                 0: {
                     items: 1 // Number of items to show on smaller screens
                 },
                 600: {
                     items: 2 // Number of items to show on medium-sized screens
                 },
                 1000: {
                     items: 3 // Number of items to show on larger screens
                 }
             }
         });
     });
 