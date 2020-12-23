import Vue from 'vue'
import Router from 'vue-router';
import login from "@/components/pages/login"
import dashboard from "@/components/pages/dashboard"
import user from "@/components/pages/user"
import meterreading from "@/components/pages/meterReading";
import fournotfour from "@/components/pages/fourNotfour";
import overview from "@/components/pages/overview"
import addDetails from "@/components/pages/addDetails"
Vue.use(Router)
export default new Router(
    {
        mode: "history",
        routes: [
            {
                path: '/',
                name: 'loginPage',
                component: login
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: dashboard,
                meta: {
                    layout: "sidebar",
                },
                beforeEnter: (to, from, next) => {
                    if (!sessionStorage.getItem("login")) {
                        next("/");
                    } else {
                        next();
                    }
                }
            },
            {
                path: '/user',
                name: 'user',
                component: user,
                meta: {
                    layout: "sidebar",
                },
                beforeEnter: (to, from, next) => {
                    if (!sessionStorage.getItem("login")) {
                        next("/");
                    } else {
                        next();
                    }
                }
            },
            {
                path: '/meterreading',
                name: 'meterreading',
                component: meterreading,
                meta: {
                    layout: "sidebar",
                },
                beforeEnter: (to, from, next) => {
                    if (!sessionStorage.getItem("login")) {
                        next("/");
                    } else {
                        next();
                    }
                }
            },
            {
                path: '/facility/overview',
                name: 'overview',
                component: overview,
                meta: {
                    layout: "sidebar",
                },
                beforeEnter: (to, from, next) => {
                    if (!sessionStorage.getItem("login")) {
                        next("/");
                    } else {
                        next();
                    }
                }
            },
            {
                path: '/facility/add_details',
                name: 'addDetails',
                component: addDetails,
                meta: {
                    layout: "sidebar",
                },
                beforeEnter: (to, from, next) => {
                    if (!sessionStorage.getItem("login")) {
                        next("/");
                    } else {
                        next();
                    }
                }
            },
            {
                path: '*',
                name: 'fournotfour',
                component: fournotfour,

            }
        ]
    }
)