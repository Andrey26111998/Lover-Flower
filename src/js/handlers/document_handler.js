const DocumentHandler = {
    getDirection(width) {
        return window.innerWidth <= width ? "vertical" : "horizontal";
    },

    isReachedBoundary(element){
        const scrollPosition = window.scrollY;
        const elementTop = element.offsetTop;
        const viewportHeight = window.innerHeight;
        const boundaryPosition = elementTop - viewportHeight;
        return scrollPosition >= boundaryPosition;
    },
}

export default DocumentHandler;