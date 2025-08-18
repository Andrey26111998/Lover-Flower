import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import DocumentHandler from "../handlers/document_handler";

try {
    const popularProductsSlider = new Swiper(".popular-products__slider", {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        direction: DocumentHandler.getDirection(320),
        on: {
            resize: () => {
                popularProductsSlider.changeDirection(DocumentHandler.getDirection(320));
            },
        },
        navigation: {
            prevEl: ".popular-products__prev",
            nextEl: ".popular-products__next",
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Popular products slider error:", errorMessage);
}