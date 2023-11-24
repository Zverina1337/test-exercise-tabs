import {unref} from "vue";

export const VIntersectionObserver = {
    mounted(el, bindings) {

        const options = {
            rootMargin: "0px",
            threshold: 0.5,
        };

        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                bindings.value()
            }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(unref(el))
    }
}