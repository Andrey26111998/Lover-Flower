export const getDirection = (threshold) => {
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