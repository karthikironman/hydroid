import Vue from 'vue'
import Router from 'vue-router';
import login from "@/components/pages/login"
import dashboard from "@/components/pages/dashboard"
Vue.use(Router)
export default new Router(
    {
        mode:"history",
        routes:[
            {
                path:'/',
                name:'loginPage',
                component:login
            },
            {
                path:'/dashboard',
                name:'dashboard',
                component:dashboard,
                meta: {
                    layout: "sidebar",
                  }
            }
        ]
    }
)