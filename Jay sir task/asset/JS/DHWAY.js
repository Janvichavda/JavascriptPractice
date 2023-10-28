
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: "1",
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});



var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next4",
        prevEl: ".prev4",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// --our team slider--

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
    
