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
      // {
      //   path:"word",
      //   component:()=>import("@/components/record/words.vue")
      // },
      {
        path:"record",
        component:()=>import("@/views/admin/word/record.vue")
      },
      {
        path:"plan",
        component:()=>import("@/views/admin/plan/planDetail.vue")
      },
      {
        path:"sign",
        component:()=>import("@/views/admin/sign/index.vue")
      }
    ]
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


export default router;
