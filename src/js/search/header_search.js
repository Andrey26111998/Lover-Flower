import DocumentHandler from "/src/js/handlers/document_handler.js";

const headerSearchButton = document.querySelector(".header__search-button");
const headerSearchBlock = document.querySelector(".header__search-block");
const headerSearchBlockCloseButton = headerSearchBlock.querySelector(".close");
const headerInfo =  document.querySelector(".header__info");
const headerPhone =  document.querySelector(".header__phone");
const headerModificationPoint = document.querySelector(".header-modification-point");

headerSearchButton.addEventListener("click", (e) => {
    headerSearchButton.classList.add("hidden");
    headerInfo.classList.add("hidden");
    headerPhone.classList.add("hidden");
    headerSearchBlock.classList.add("active");
});

headerSearchBlockCloseButton.addEventListener("click", (e) => {
    headerSearchBlock.classList.remove("active");
    headerSearchButton.classList.remove("hidden");
    const reachedBoundary = DocumentHandler.isReachedBoundary(headerModificationPoint);
    if (!reachedBoundary) {
        headerInfo.classList.remove("hidden");
    }
    headerPhone.classList.remove("hidden");
});