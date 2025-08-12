// postcss.config.js
const pxToRem = require("@minko-fe/postcss-pxtorem");

module.exports = {
    plugins: [
        pxToRem({
            rootValue: 16,
            //selectorBlackList: ["some-class"],
            propList: ["*"],
            atRules: ["media"],
            // ...
        }),
    ],
}