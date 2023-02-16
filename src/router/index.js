import {createRouter, createWebHistory} from "vue-router"
import routes from "./routes"

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: routes, // short for `routes: routes`
})

// eslint-disable-next-line no-unused-vars
router.beforeEach( async (to, from) => {
    // TODO: Implement redirect if user is not logged in
    // return { name: "login"}
})

export default router;