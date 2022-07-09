<template>

    <div class="w-75 mx-auto">
        <div v-for="newsItem in this.articlelist" :key="newsItem.id"
        class="card shadow-sm mb-3">
            <div class="card-body">
                <h4>{{newsItem.title}}</h4>
                <div class="row align-items-center my-3">
                    <div class="col-4">
                        <img :src="newsItem.image" class="w-100 rounded-lg">
                    </div>
                    <div class="col-8">
                        <p class="text-muted">{{ newsItem.content }}</p>
                    </div>
                </div>
                 <p class="text-muted">{{ newsItem.createdAt}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import {details} from '@/api/column'
// import PubSub from 'pubsub-js'
export default {
    created () {
          const currentId = this.$route.params.id
          
           this.columncc = this.list.find(c => c.id === currentId)
          details(currentId).then(res=>{
          })
         this.articlelist = this.listDetail.filter(post => post.columnId === currentId)
          
        // console.log('订阅信息准备')
        // this.pid = PubSub.subscribe('exportData',(msg,data)=>{
        //     console.log(msg,'订阅信息');
        //     const route = useRoute()  
        //     const currentId = +route.params.id
        //     const column = data.find(c => c.id === currentId)
        //     // const list = data.filter(post => post.columnId === currentId)
        //     console.log(column)
        // }) 
    },
    beforeDestroy () {
        PubSub.unsubscribe(this.pid)
    },
    data () {
        return {
            pid:'',
            columncc:[],
            articlelist:[],
             listDetail: [
        {
              id: 1,
              title: '这是我的第一篇文章',
              content: '"你有这样的才华看你学英语的：老师都告诉她后，所有的美剧都听得懂话多听，眼睛得死白白需要这个时间对呢？说实话，我看日剧也是讲我觉得基础二英语，日语的语法学过，是不是也背过一些"',
              image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
              createdAt: '2020-06-11 10:34:22',
              columnId: 1
      },
      {
              id: 2,
              title: '这是我的第二篇文章',
              content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
              createdAt: '2020-06-11 10:34:22',
              columnId: 1
       },
       {
              id: 3,
              title: '这是我的第三篇文章',
              content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
              image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
              createdAt: '2020-06-11 10:34:22',
              columnId: 1
        },
        {
              id: 3,
              title: '这是我的第三篇文章',
              content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
              image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
              createdAt: '2020-06-11 10:34:22',
              columnId: 2
        }
]
        ,
        list: [{
          id: 1,
          title: 'test1的专栏',
          description: '这是test1的专栏这是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
          avatar: ''
        },
        {
          id: 2,
          title: 'test2的专栏',
          description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
          avatar: ''
        },
        {
          id: 3,
          title: 'test3的专栏',
          description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
          avatar: ''
        },
        {
          id: 4,
          title: 'test4的专栏',
          description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
          avatar: ''
        },
        {
          id: 5,
          title: 'test5的专栏',
          description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
          avatar: ''
        },
        {
          id: 6,
          title: 'test6的专栏',
          description: '这是test2的专栏1的专栏这是test是test1的专栏test1的专栏这是test1的专栏这是test1的专栏',
          avatar: ''
        }]
        }
    },
    methods: {
    }
}
</script>
<style scoped>
</style>
