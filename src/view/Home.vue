<template>
  <div>
    <div class="col-lg-6 col-md-8 text-center mx-auto py-lg-5">
      <img src="../assets/callout.svg" class="card-img-top mx-auto w-50" alt="callout">
      <h2 class="font-weight-light">随心写作，自由表达</h2>
       
    </div>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="listDetail"></column-list>
     
  </div>
</template>

<script>
  import {columns} from '@/api/column'
  import ColumnList from '../components/ColumnList.vue'
  import PubSub from 'pubsub-js'
  export default {
    name: 'HomeList',
    components: {
      ColumnList
    },
    created () {
      // PubSub.publish('exportData',this.list)
      // console.log(this.list)
      columns(1,5).then(res=>{
        this.listDetail = res.data.data.list
      })
    },
    data() {
      return {
        listDetail:[]
//         listDetail: [
//         {
//               id: 1,
//               title: '这是我的第一篇文章',
//               content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
//               image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
//               createdAt: '2020-06-11 10:34:22',
//               columnId: 1
//       },
//       {
//               id: 2,
//               title: '这是我的第二篇文章',
//               content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
//               createdAt: '2020-06-11 10:34:22',
//               columnId: 1
//        },
//        {
//               id: 3,
//               title: '这是我的第三篇文章',
//               content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
//               image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
//               createdAt: '2020-06-11 10:34:22',
//               columnId: 1
//         },
//         {
//               id: 3,
//               title: '这是我的第三篇文章',
//               content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
//               image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
//               createdAt: '2020-06-11 10:34:22',
//               columnId: 2
//         }
// ]
//         ,
//         list: [{
//           id: 1,
//           title: 'test1的专栏',
//           description: '这是test1的专栏这是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
//           avatar: require('../assets/avatar.jpg')
//         },
//         {
//           id: 2,
//           title: 'test2的专栏',
//           description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
//           avatar: ''
//         },
//         {
//           id: 3,
//           title: 'test3的专栏',
//           description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
//           avatar: ''
//         },
//         {
//           id: 4,
//           title: 'test3的专栏',
//           description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
//           avatar: ''
//         },
//         {
//           id: 5,
//           title: 'test3的专栏',
//           description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
//           avatar: ''
//         },
//         {
//           id: 6,
//           title: 'test4的专栏',
//           description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
//           avatar: ''
//         }]
      }    
    },
    methods: {
      send(){
        PubSub.publish('exportData',this.list)
        console.log('发布信息');
      }
    }
  }
</script>
<style scoped>
  .btn-block {
    display: block
  }
</style>