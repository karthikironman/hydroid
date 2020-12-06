import Vue from 'vue'
import Router from 'vue-router';
import login from "@/components/pages/login"
import dashboard from "@/components/pages/dashboard"
import user from "@/components/pages/user"
import meterreading from "@/components/pages/meterReading";
import fournotfour from "@/components/pages/fourNotfour";
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
            },
            {
                path:'/user',
                name:'user',
                component:user,
                meta: {
                    layout: "sidebar",
                  }
            },
            {
                path:'/meterreading',
                name:'meterreading',
                component:meterreading,
                meta: {
                    layout: "sidebar",
                  }
            },
            {
                path:'*',
                name:'fournotfour',
                component:fournotfour,
             
            }
        ]
    }
)