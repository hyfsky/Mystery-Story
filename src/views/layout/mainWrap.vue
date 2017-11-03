 <template>

	<div class="container">
		<el-row>
			<top-head></top-head>
		</el-row>
		<el-row>
			<el-col class="leftContent" :class="{on: isFlag}">
				<left-menu :isCollapse="isFlag" @open="open"></left-menu>
			</el-col>
			<el-col class="content" :class="{on: isFlag}">
				<router-view></router-view>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import leftMenu from './leftMenu.vue'
import topHead from './head.vue'
export default{
	components: {
		leftMenu,
		topHead
	},
	data() {
		return {
			isFlag: false,
		}
	},
	methods: {
		open() {
			this.isFlag = !this.isFlag;
		}
	},
}
</script>

<style lang="less">
@import url('../../styles/base/itool.less');
.leftContent{
	.position(f);
	height: 100%;
	top: 53px;
	bottom: 0;
	max-width: 200px;
	.bg(#545c64);
	.menuHead{
		.algin(r);
		.paddingR(18px);
	}
}
.leftContent.on{
	width: 64px;
	.menuHead{
		.algin(c);
		.paddingR(0);
	}
}
.content{
	.paddingL(200px);
	.position(r);
}
.content.on{
	.paddingL(64px);
}
</style>
