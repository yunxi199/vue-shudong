import axios from 'axios'
import { Loading, Message } from 'element-ui'

const request = axios.create({
    baseURL:'https://www.fastmock.site/mock/96ea6404fc7dc6d7ddc4ea1448911a5a',
    timeout:5000
})

// const loading = { 
//     loadingInstance:null, 
//     open:function(){
//         if(this.loadingInstance === null){ 
//             this.loadingInstance = Loading.service(
//             {  
//                 text: '拼命加载中', 
//                 target: '.main', 
//                 background: 'rgba(0, 0, 0, 0.5)' 
//             })
//         }
//     },
//     close:function() { 
//         if(this.loadingInstance !== null){
//             this.loadingInstance.close()
//         }
//         this.loadingInstance = null
//     }
// }

// request.interceptors.request.use(config => { 
//         loading.open() 
//         return cofig
//     },error => { 
//         return Promise.reject(error); 
// })

// request.interceptors.response.use(response =>{ 
//     loading.close()  
//     return response 
//     }, error => { loading.close() 
//         return Promise.reject(error); 
// })

request.interceptors.response.use(response =>{ 
    const resp = response.data 
    if(resp.code === 200 || resp.code === 0 || resp.code === 20000){
        return response
    }else{ 
        Message({
            message: '系统异常', 
            type: 'warning',
            duration: 5 * 1000 
        }) 
    }
    return response
},error => {
     Message({
        message: error.message, 
        type: 'error',
        duration: 5 * 1000 
    })
    return Promise.reject(error); 
})

export default request