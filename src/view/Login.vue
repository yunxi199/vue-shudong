<template>
<div class="login-container">
    
    <el-form :rules="rules" ref="form" :model="form" label-width="56px" class="login-form">
        <h4 style="color:#ffffff;margin-bottom:20px">树洞系统</h4>
        <el-form-item  label="账号" prop="email" >
            <el-input v-model="form.email" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item  label="密码" prop="password">
            <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="login-button" @click="submitForm('form')">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
    export default {
        name:'Login',
        data(){
            return{
                form:{},
                rules:{
                    email:[{
                        required:true,message:"请输入有效账号",trigger:"blur"
                    }],
                    password:[{
                        required:true,message:"请输入有效密码",trigger:"blur"
                    }]
                }
            }
        },
        methods:{
            submitForm(form){
                this.$refs[form].validate((valid)=>{
                    if(valid){
                        this.$store.dispatch('Login',this.form).then(res=>{
                            console.log(res)
                                if(res.data.flag){
                                    this.$router.push('/')
                                }else{
                                    this.$message({
                                    message: res.data.massage, type: 'warning' })
                                }
                            }).catch(()=>{})
                        
                    }else{
                        return false
                    }
                    // if(valid){
                    //     alert('submit');
                    //     login(this.form.username,this.form.password).then(res=>{
                    //         if(res.flag){
                    //             getUserInfo(res.token).then(res => {
                    //                 if(res.flag){
                    //                     localStorage.setItem('mgx-msm-user',JSON.stringify(res.data))
                    //                     localStorage.setItem('mgx-msm-token',res.token)
                    //                     this.$route.push('/')
                    //                 }else{
                    //                     this.$message({
                    //                         message:res.message,
                    //                         type:'warning'
                    //                     })
                    //                 }
                    //             })else{
                    //                 this.$message({
                    //                     message:res.message,
                    //                     type:'warning'
                    //                 })
                    //             }
                                
                    //         }
                    //     })
                    // }else{
                    //     console.log('error submit');
                    //     return false
                    // }
                })
            }
        }
    }
</script>

<style scoped>
.login-form { 
    width: 350px; /* 上下间隙150px, 左右自动 */
    margin: 160px auto; /*透明背景色*/
    background-color:#0d6efd;
    padding: 30px; /* 圆角 */
    border-radius: 20px; 
    text-align:center
}
.login-button {
    display:block;
    float:left;
    margin-top:10px;
    color:#ffffff;
    background-color:#0d6efd;
    border:solid 2px #ffffff;
    width:100px;
}
 /deep/.el-form-item__error{
  color: red;
  font-size:10px;
}
/deep/ .el-form-item__label{
    color:#ffffff
}
</style>