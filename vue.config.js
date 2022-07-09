// module.exports = {
//     devServer: {
//         // host: 'localhost',//target host
//         // port: 8080,
//         //proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
//         proxy: {
//             '^/admin': {
//                 target: 'http://127.0.0.1:3000', //代理地址，这里设置的地址会代替axios中设置的baseURL
//                 changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
//             },
//             '^/api': {
//                 target: 'http://127.0.0.1:3000', //代理地址，这里设置的地址会代替axios中设置的baseURL
//                 changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
//             },
//         }
//     }
// }
module.exports = {  
    devServer: {
        host:'localhost',
        port:8080,
        // proxy: {
        //     '/': {
        //         // target: 'https://mall-pre.springboot.cn',
        //         target: 'http://bjbss.pension.taikang.com',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '/api': ''
        //         },
        proxy:{
                '^/base':{
                      target:'https://www.fastmock.site/mock/96ea6404fc7dc6d7ddc4ea1448911a5a',
                      changeOrigin: true
                 }
              }
        },
        productionSourceMap: false, //打包时不会生成.map文件
        lintOnSave: false, //关闭格式检查
        
}