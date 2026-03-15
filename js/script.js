const bigImg = document.getElementById('img-center')
const smallImgs = document.querySelectorAll('.img-small')
const color = document.getElementById('color')

//zoom
$("#img-center").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair"
})
smallImgs.forEach(img => {

    img.addEventListener('click', function () {
        smallImgs.forEach(i => i.classList.remove('active-border'));

        this.classList.add('active-border');
        bigImg.src = img.src

        $("#img-center").data('elevateZoom')
            .swaptheimage(img.src, img.src)

        color.textContent = img.alt

    })
})


//swiper
const wrapper = document.querySelector('.related-swiper .swiper-wrapper');
const slides = document.querySelectorAll('.related-swiper .swiper-slide');
if (slides.length > 0 && slides.length < 10) {
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        wrapper.appendChild(clone);
    });
}
const swiperRelated = new Swiper('.related-swiper', {
    slidesPerView: 4,
    spaceBetween: 4,
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    speed: 400,

    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
    },

    navigation: {
        nextEl: '#rel-next',
        prevEl: '#rel-prev',
    },
});


//counter
const minus=document.querySelector('.minus')
const plus=document.querySelector('.plus')
const countValue=document.querySelector('.countValue')

plus.addEventListener('click', () => {
    let value = Number(countValue.textContent);
    countValue.textContent = value +1;
});

minus.addEventListener('click', () => {
    let value = parseInt(countValue.textContent);
    if (value > 1) {
        countValue.textContent = value - 1;
    }
});
