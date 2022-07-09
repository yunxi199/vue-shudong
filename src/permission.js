/*
权限校验：
通过router路由前置钩子函数beforeEach(),
在跳转路由前进行拦截判断是否已经登录，
如果已登录，则进行路由跳转，如果没有则回到登录页
*/
import router from './router'
import store from './store'

// import {getUserInfo} from './api/login'

router.beforeEach((to,from,next)=>{
    let userToken = store.state.user.token
    if(!userToken){
        if(to.path !== '/login'){
            next({path:'/login'})
        }else{
            next()
        }
    }else{
        if(to.path === '/login'){
            next()
        }else{
            let userInfo = store.state.user.userName
            if(userInfo){
                next()
            }else{
                store.dispatch('getUserL').then(res=>{
                    if(res.data.flag){
                        next()
                    }else{
                        next({path:'/login'})
                    }
                }).catch(()=>{})
            }
         }
    }
})