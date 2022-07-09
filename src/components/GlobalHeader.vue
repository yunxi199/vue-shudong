<template>
    <nav class="navbar navbar-dark justify-content-between bg-primary mb-4">
        <a class="navbar-brand" href="#">树洞</a>
        <ul v-if="!this.$store.state.user.userName" class="ml-2">
            <li class="list-inline-item">
                <router-link to="/login" class="btn btn-outline-light">登录</router-link>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
             <li class="list-inline-item">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link el-cc-dropdown">
                        你好{{this.$store.state.user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="el-cc-menu" >
                        <el-dropdown-item class="el-cc-item" command="a">我的专栏</el-dropdown-item>
                        <el-dropdown-item class="el-cc-item" command="b">退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>
   </nav>
</template>

<script>

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
        }
    },
    methods: {
        handleCommand(command){
            switch(command){
                case 'a':
                    this.$router.push({path:'/article'});
                    break;
                case 'b':
                        console.log('999')
                        this.$store.dispatch('logOutL').then((res)=>{
                        if(res.data.flag){
                            console.log('9999999')
                            this.$router.push('/login')
                        }else{
                            this.$message({
                                message:res.message,
                                type:'warning',
                                duration:500
                            })
                        }
                    }).catch(()=>{})
        
                    break;
                default:
                    break;
            }
        }
    }
}
</script>
<style scoped>
.navbar-brand{
  margin-left: 2rem
}
.ml-2{
  margin-right: 2rem
}
ul{
  margin:0;
  padding:0
}
.el-cc-dropdown{
    color:#ffffff;
    font-size:1.2rem
}
.el-cc-item a{
    text-decoration:none;
    color:#0d6efd;
    font-size:1rem;
}
.el-cc-menu{
    width:10rem;
    text-align:center
}

</style>
