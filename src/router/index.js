import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/HomePage.vue";
import Opiniones from "../views/OpinionesPage.vue";


// Habilitar VueRouter en Vue 2
Vue.use(VueRouter);

// Configuración de las rutas
const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/opiniones/:gameName?", name: "Opiniones", component: Opiniones },
    
];

// Creación de la instancia de VueRouter
const router = new VueRouter({
    mode: "history", // Usa el modo "history" para rutas limpias
    base: process.env.BASE_URL,
    routes,
});



export default router;
