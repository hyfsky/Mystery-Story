<template>
	<div class="leftMenu">
		<template>
			<div class="menuHead" @click="open">
				<i class="iconfont" v-if="isCollapse">&#xe600;</i>
				<i class="iconfont" v-else>&#xe619;</i>
			</div>
			<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
  				<el-submenu index="1">
    				<template slot="title">
      					<i class="el-icon-message"></i>
      					<span slot="title">导航一</span>
				    </template>
				    <el-menu-item-group>
  						<span slot="title">分组一</span>
      					<el-menu-item index="1-1">选项1</el-menu-item>
      					<el-menu-item index="1-2">选项2</el-menu-item>
    				</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<span slot="title">选项4</span>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2">
					<i class="el-icon-menu"></i>
					<span slot="title">导航二</span>
				</el-menu-item>
				<el-menu-item index="3">
					<i class="el-icon-setting"></i>
					<span slot="title">导航三</span>
				</el-menu-item>
			</el-menu>
		</template>
	</div>
</template>

<script>
	export default{
		name: 'leftMenu',
		props: {
			isCollapse: false
		},
		data() {
			return {
				// isCollapse: false,
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			open() {
				this.$emit('open')
			}
		}
	}
</script>

<style lang="less">
@import url('../../styles/base/itool.less');
.menuHead{
	width: 100%;
	height: 56px;
	.algin(c);
	.line(56px);
	.iconfont{
		.color(#878d99);
		.fontSize(18px);
	}
}
</style>
