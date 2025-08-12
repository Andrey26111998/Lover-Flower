const ElementHandler = {
    createElement(tag, options = {}) {
        const element = document.createElement(tag);
        const {classes = [], attributes = {}, properties = {}, children = []} = options;

        for (const cls of classes) {
            element.classList.add(cls);
        }

        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value.toString());
        }

        for (const key of Object.keys(properties)) {
            element[key] = properties[key];
        }

        for (const child of children) {
            element.appendChild(child);
        }

        return element;
    },

    removeElement (element) {
        element.remove();
    },
}

export default  ElementHandler;