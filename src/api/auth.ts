import axios from '@/utils/axios'
import type { LoginParams, LoginResponse } from './type'

/**
 * 登录接口
 * @param data 登录参数
 */
function LoginAPI(data: LoginParams) {
    return axios.post<LoginResponse>('', data)
}

/**
 * 退出登录接口
 */
function LogoutAPI() {
    return axios.post('', {})
}

export { LoginAPI, LogoutAPI }