import Auth from '../components/Auth.vue'
import Main from '../components/Main.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {ElMessage} from "element-plus";

const routes = [
    {path: '/', name: 'Main', component: Main, meta:{guest: true}},
    {path: '/auth', name: 'auth', component: Auth, meta: {guest: true}},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/*
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('accessToken') == null && to.name != 'auth') {
            next({ name: 'auth' })
    }
    else {
        next()
    }
})
*/

export default router