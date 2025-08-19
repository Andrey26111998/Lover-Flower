import {defineConfig} from "vite";
import viteHTMLIncludes from "@kingkongdevs/vite-plugin-html-includes";

export default defineConfig({
    plugins: [
        viteHTMLIncludes({
            componentsDir: "/components/",
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                order: "order.html",
                notFound: "404.html",
                about: "about.html",
                deliveryPayment: "delivery-payment.html",
                faq: "faq.html",
                paymentError: "payment_error.html",
                successfulPayment: "successful_payment.html",
            },
        },
    },
});