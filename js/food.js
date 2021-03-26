var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//
// $('.responsive ').slick({
//     dots: false,
//     // prevArrow: $('.prev'),
//     // nextArrow: $('.next'),
//     infinite: false,
//     speed: 300,
//     slidesToShow: 7,
//     slidesToScroll: 7,
//     responsive: [
//         {
//             breakpoint: 1199,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 4,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 1500,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             },},
//         {
//
//             breakpoint: 320,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             },
//
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });
//
// $('.responsive1 ').slick({
//     dots: false,
//     // prevArrow: $('.prev'),
//     // nextArrow: $('.next'),
//     infinite: false,
//     speed: 300,
//     slidesToShow: 7,
//     slidesToScroll: 7,
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 1500,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 320,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });

let closebtn = document.querySelector('.closebtn')
closebtn.addEventListener('click', closeNav)
function openNav() {
    document.getElementById("myNav").style.width = "35%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}





$('.responsive').slick({
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


var acc = document.getElementsByClassName("accordion");
var a;

for (a = 0; a < acc.length; a++) {
    acc[a].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};

