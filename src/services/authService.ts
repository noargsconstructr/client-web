import axios from 'axios'
import router from '../router/router'
import {ElMessage} from "element-plus";

class authService {
    authUser(login: string,password: string){
        return axios.post('/api/auth/v1/auth', {
            login: login,
            password: password
        })
    }
    async logout(): Promise<void> {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        ElMessage.success("Successfully logged out")
        await router.push('Main')
    }
    isTokenSet(): boolean{
        if(localStorage.getItem('accessToken') != null ){
            return true
        }
        else
        { return false}
    }
}

export default new authService();
