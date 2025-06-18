// postcss.config.js
const pxtorom = require('@minko-fe/postcss-pxtorem');

module.exports = {
    plugins: [
        pxtorom({
            rootValue: 16,
            selectorBlackList: ['some-class'],
            propList: ['*'],
            atRules: ['media'],
            // ...
        }),
    ],
}