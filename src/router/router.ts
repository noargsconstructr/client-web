import Auth from '../components/Auth.vue'
import Main from '../components/Main.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Register from '../components/Register.vue'
import GameCp from '../components/GameCp.vue'
import {ElMessage} from "element-plus";
import UserInfo from '../components/layouts/UserInfo.vue'

const routes = [
    {path: '/', name: 'Main', component: Main, meta:{guest: true}},
    {path: '/auth', name: 'Auth', component: Auth, meta: {guest: true}},
    {path: '/register', name: 'Register', component: Register, meta: {guest: true}},
    {path: '/gamecp', name: 'GameCp', component: GameCp, meta: {guest: false}}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    if (localStorage.getItem('accessToken') == null && to.name != 'Auth' && to.name != 'Register' && to.name != 'Main') {
        ElMessage({
            message: 'Авторизуйтесь, чтобы войти',
            type: 'warning',
        })
            next({ name: 'Auth' })
    }
    else {
        next()
    }
})


export default router