const openBtn = document.querySelector('#menu__btn');
const sidebarNav = document.querySelector("#sidebar__nav");
const lis = document.querySelectorAll("#sidebar__nav ul li");
const nav = document.querySelector("header");
const whatsflut = document.querySelector(".btn-flut");
const a_nav = document.querySelectorAll("#a_nav");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelector('.a_nav2');
const lazyframe = document.querySelectorAll('#lazyframe');

lazyframe.forEach(video => {
    video.classList.add("filter")
    video.onclick = () => {
        video.classList.remove("filter")
    }
})

window.onscroll = () => {
    if (window.scrollY > 0) {
        nav.dataset.active = "true"
        whatsflut.dataset.active = "true"
    } else {
        nav.dataset.active = "false"
        whatsflut.dataset.active = "false"
    };
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            a_nav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#a_nav[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
lis.forEach(li => {
    li.onclick = () => {
        sidebarNav.dataset.active = "false";
    }
})
a_nav.forEach(links => {
    links.onclick = () => {
        if (sidebarNav.dataset.active === 'false') {
            openBtn.dataset.active = 'true';
        } else {
            openBtn.dataset.active = 'false';
        };
    }
});
navLinks.onclick = () => {
    if (sidebarNav.dataset.active === 'false') {
        openBtn.dataset.active = 'true';
    } else {
        openBtn.dataset.active = 'false';
    };
}
openBtn.onclick = () => {
    if (openBtn.dataset.active === 'false') {
        openBtn.dataset.active = 'true';
    } else {
        openBtn.dataset.active = 'false';
    };
    if (sidebarNav.dataset.active === 'false') {
        sidebarNav.dataset.active = 'true';
    } else {
        sidebarNav.dataset.active = 'false';
        openBtn.dataset.active = 'false';
    };
}
var swiper = new Swiper(".mySwiper-img1", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-img",
        prevEl: ".swiper-button-prev-img",
    },
});
var swiper1 = new Swiper(".mySwiper-img2", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-img2",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev-img",
        nextEl: ".swiper-button-next-img",
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
});
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev1",
        nextEl: ".swiper-button-next1",
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});
var swiper1 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev2",
        nextEl: ".swiper-button-next2",
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});
var swiper1 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev3",
        nextEl: ".swiper-button-next3",
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});
var swiper1 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    rewind: false,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination4",
        clickable: true,
    },
    navigation: {
        prevEl: ".swiper-button-prev4",
        nextEl: ".swiper-button-next4",
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});