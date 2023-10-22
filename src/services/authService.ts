import axios from 'axios'
import router from '../router/router'
import {ElMessage} from "element-plus";

class authService {
    authUser(email: string,password: string){
        return axios.post('/api/auth/v1/login', {
            email: email,
            password: password
        })
    }
    logout(): void{
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        ElMessage.success("Successfully logged out")
        router.push('Main')
    }
}

export default new authService();
