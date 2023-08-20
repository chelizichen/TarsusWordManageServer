import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path:"/home",
    component:()=>import("@/views/home/index.vue")
  },
  {
    path:"/manage",
    component:()=>import("@/views/admin/layout.vue"),
    children:[
      {
        path:"user",
        component:()=>import("@/views/admin/user/index.vue")
      },
      {
        path:"word",
        component:()=>import("@/views/admin/word/index.vue")
      }
    ]
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


export default router;
