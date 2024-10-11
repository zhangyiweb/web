/*
 * @Descripttion: 
 * @Date: 2022-04-27 16:51:40
 */
export default [
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
    },
    {
        path: "/aaa",
        name: "aaa",
        component: () => import("@/views/1/index.vue"),
    },
];
