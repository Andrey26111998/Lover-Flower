import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const getDirection = (threshold) => {
    try {
        const windowWidth = window.innerWidth;
        return windowWidth <= threshold ? "vertical" : "horizontal";
    }
    catch (err) {
        const message = err.message
        console.error("Error in transmited value:", message);
        return "horizontal";
    }
}

try {
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
}
catch (err) {
    const message = err.message;
    console.error("Error during initialization:", message);
}