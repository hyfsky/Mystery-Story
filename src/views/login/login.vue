<template>
    <div class="login_wrapper">
        <div class="login_form">
            <el-form label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label-width="0">
                    <h3 class="login_title">Mock登录系统</h3>
                </el-form-item>
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="ruleForm.userName" suffix-icon="el-icon-edit-outline"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input v-model="ruleForm.passWord" suffix-icon="el-icon-view"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            rules: {
                userName: [
                    { required: true, message: '请输入用户名！', trigger: 'blur' },
                    { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
                ],
                passWord: [
                    { required: true, message: '请输入用户密码！', trigger: 'blur' }
                ]
            },
            ruleForm: {
                userName: '',
                passWord: ''
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="less">
@import url('../../styles/base/itool.less');
.login_wrapper{
    width: 100%;
    height: 100%;
    .position(r);
    .bg(#B6EFDE);
    .login_form{
        width: 420px;
        height: 320px;
        .bg(#fff);
        border: 1px solid #15E1A4;
        .position(a);
        top: 50%;
        left: 50%;
        margin-top: -160px;
        .marginL(-210px);
        .reduis(10px);
        .padding(20px);
        .login_title{
            .algin(c);
            .fontSize(20px);
        }
    }
}

</style>
