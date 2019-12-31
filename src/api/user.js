import http from './index'

// 登录
export const login = (parameter) => {
    return http.fetchPost(`${http.baseUrl}/user/login`, parameter)
}

// 注册
export const register = (parameter) => {
    return http.fetchPost(`${http.baseUrl}/user/register`, parameter)
}

// 修改信息
export const update = (parameter) => {
    return http.fetchPost(`${http.baseUrl}/user/update`, parameter)
}

// 修改密码
export const repass = (parameter) => {
    return http.fetchPost(`${http.baseUrl}/user/repass`, parameter)
}

