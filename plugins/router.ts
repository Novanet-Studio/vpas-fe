import { defineNuxtPlugin } from "nuxt/app";
export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (
    to: { hash: any },
    from: any,
    savedPosition: any
  ) => {
    if (to.hash) {
      return {
        el: to.hash,
        top: 30,
        behavior: 'smooth'
      };
    }
  };
});
