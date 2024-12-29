import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Importa el archivo del router

// Importa Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// Importa FontAwesome
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  router, // Usa el router
    render: (h) => h(App),
}).$mount("#app");
