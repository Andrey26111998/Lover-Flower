import {defineConfig} from "vite";
import {resolve} from "path";
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
                main: resolve(__dirname, "index.html"),
                order: resolve(__dirname, "order.html"),
                notFound: resolve(__dirname, "404.html"),
                about: resolve(__dirname, "about.html"),
                deliveryPayment: resolve(__dirname, "delivery_payment.html"),
                faq: resolve(__dirname, "faq.html"),
                paymentError: resolve(__dirname, "payment_error.html"),
                successfulPayment: resolve(__dirname, "successful_payment.html"),
                contacts: resolve(__dirname, "contacts.html"),
                corporateInformation: resolve(__dirname, "corporate_information.html"),
                searchError: resolve(__dirname, "search_error.html"),
            },
        },
    },
});