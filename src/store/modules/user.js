import {login,getUserInfo,logOut} from '@/api/login'
import { getToken, setToken, setUser, getUser, removeToken } from '@/utils/auth'

const user = {
   state:{
       token:getToken(),
       userName:getUser()
   },
   mutations:{
       SET_TOKEN(state,token){
           state.token = token,
           setToken(token)
       },
       SET_USER(state, user)
        { 
            state.userName = user 
            setUser(user)
        }
   },
   actions:{
       Login({commit},form){
           return new Promise((resolve,reject)=>{
               login(form.email,form.password).then(res=>{
                   commit('SET_TOKEN',res.data.data.token)
                   resolve(res)
               }).catch(err=>err)
           })
       },
    getUserL({commit,state}){
        return new Promise((resolve,reject)=>{
            getUserInfo(state.token).then(res=>{
                commit('SET_USER',res.data.data.name)
                resolve(res)
            }).catch(err=>err)
        })
   },
   logOutL({commit,state}){
       console.log('000')
    return new Promise((resolve,reject)=>{
        logOut(state.token).then(res=>{
            console.log('000000')
            commit('SET_TOKEN','')
            commit('SET_USER','')
            resolve(res)
        }).catch(err => err)
    })
   }
 }
}

export default user
