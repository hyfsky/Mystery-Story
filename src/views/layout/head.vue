<template>
	<div class="head">
		<h2>{{ moduleTitle }}</h2>
		<el-dropdown class="set_box">
			<i class="el-icon-plus set_icon"></i>
			<el-dropdown-menu slot="dropdown" class="set_wrapper">
				<el-dropdown-item>
					<i class="iconfont">&#xe7a0;</i>
					<span>资料设置</span>
				</el-dropdown-item>
				<el-dropdown-item>
					<i class="iconfont">&#xe815;</i>
					<span>退出</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<div class="sign_name">{{ headPicName }}</div>
		<div class="head_pic">
	    	<vue-letter-avatar :name="headPicName" size="30" :rounded="true" />
		</div>
		<!-- <div>
			<ul>
				<li>

				</li>
				<li>

				</li>
			</ul>
		</div> -->
	</div>
</template>

<script>
export default {
    name: 'head',
    data () {
        return {
            headPicName: "Mystery",
			moduleTitle: 'Mystery Story',
        }
    },
    methods: {

    }
}
</script>

<style lang="less">
@import url('../../styles/base/itool.less');
.head{
    .position(r);
    padding: 10px 20px;
    .bg(#409eff);
    .clearfix;
	.set_box{
		.float(r);
	}
    .sign_out{
        .float(r);
        .line(30px);
        .color(#fff);
        .fontSize(14px);
        cursor: pointer;
    }
    .sign_name{
        .sign_out;
        .fontSize(16px);
        .marginR;
    }
    .head_pic{
        .float(r);
        .marginR;
    }
	.set_icon{
		width: 30px;
		height: 30px;
		.float(r);
		.color(#fff);
		.fontSize(18px);
		.algin(c);
		.line(30px);
		cursor: pointer;
	}
    h2{
        .position(a);
        top: 9px;
        left: 200px;
		width: 400px;
		.algin(l);
		font-family: "League-Gothic", Courier;
		font-size: 30px;
		text-transform: uppercase;
		color: #fff;
		text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
    }
}
</style>
