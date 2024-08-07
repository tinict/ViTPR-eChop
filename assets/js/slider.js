const swiper = new Swiper('.list-category', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.icon-lst-right',
        prevEl: '.icon-lst-left',
    },
});
