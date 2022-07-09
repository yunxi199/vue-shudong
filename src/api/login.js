import request from '@/utils/request'


export function login(email,password){
    return request({
        url:'/base/api/login',
        method:'post',
        data:{
            email,
            password
        }
    })
}
export function getUserInfo(token){
    return request({
        url:'/base/api/user/info',
        method:'get',
        data:{
            token
        }
    })
}
export function logOut(token){
    return request({
        url:'/base/api/user/logout',
        method:'post',
        data:{
            token
        }
    })
}

