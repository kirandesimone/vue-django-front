import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: () =>
                import("./views/Home.vue")
        },
        {
            path: "/posts/:id",
            name: "Post",
            component: () => 
                import("./views/Post.vue")
        },
        {
            path: "/about",
            name: "About",
            component: () => 
                import("./views/About.vue")
        }
    ]
})