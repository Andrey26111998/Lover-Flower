import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const getDirection = (threshold) => {
    let windowWidth = window.innerWidth;
    let direction = window.innerWidth <= threshold ? "vertical" : "horizontal";
    return direction;
}

const popularProductsSlider = new Swiper(".popular-products__slider", {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    direction: getDirection(320),
    on: {
        resize: () => {
            popularProductsSlider.changeDirection(getDirection(320));
        },
    },
    navigation: {
        prevEl: ".popular-products__prev",
        nextEl: ".popular-products__next",
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});