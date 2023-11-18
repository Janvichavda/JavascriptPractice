// --hamburger--
const bar = document.querySelector(".menu_bar");
const navbar = document.querySelector("nav");
const navbarli = document.querySelectorAll("nav .navbar li");

bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    navbar.classList.toggle("active");
});

let btn = document.querySelector(".menu_bar");
let icon = btn.querySelector(".fa-bars");
btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
};

window.addEventListener("scroll", function () {
    // console.log("test");
    let TopScrolled =
        window.pageYOffset || document.documentElement.scrollTop;
    // console.log(TopScrolled);
    if (TopScrolled > 10) {
        document.querySelector("nav").classList.remove("active");
        icon.classList.replace("fa-times", "fa-bars");
    } else {
        // document.getElementById("main-header").classList.add("fixedmenu");
    }
});
// hamburger-end

var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 100,
    effect: "slide",
    loop: true,
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

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
    // rewind: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next4",
        prevEl: ".prev4",
    },
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
    loop:true,
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
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
 
// accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
