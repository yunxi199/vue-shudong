import request from '@/utils/request'

export function columns(currentPage,pageSize){
    return request({
           url:'http://apis.imooc.com/api/columns?icode=9B27FE6AF3BA88A0',
            method:'get',
            data:{
                currentPage,
                pageSize
            }
    })
}

// export function details(id){
//     return request({
//            url:`http://apis.imooc.com/api/columns/${id}?icode=9B27FE6AF3BA88A0`,
//             method:'get',
//     })
// }