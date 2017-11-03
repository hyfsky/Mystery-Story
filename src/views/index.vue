<template>
	<div>
		<my-header></my-header>
	 	<div class="article_list">
	 		<ul>
	 			<li v-for="item in list">
					<time v-text="item.create_at"></time>
					<router-link :to="'/content/' + item.id">
						{{ item.title }}
					</router-link>
	 			</li>
	 		</ul>
	 	</div>
	 	<my-footer></my-footer>
	</div>
</template>

<script>
import myHeader from '../components/myHeader.vue'
import myFooter from '../components/myFooter.vue'
export default {
	components: {
		myHeader,
		myFooter
	},
	data () {
		return {
			list: []
		}
	},
  	created () {
    	this.getData()
  	},
  	methods: {
  		getData () {
  			this.$api.get('topics', null, res => {
	      		this.list = res.data
	    	})
  		}
  	}
}
</script>