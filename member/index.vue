<template>
	<div>
		<h2>template</h2>
	</div>
</template>
<script type="text/javascript">

	import member_model from './model.js'

	export default {
		data() {
			return {
				model:member_model(this.$http),
				list:[]
			}
		},
		methods :{
			post_level() {
				this.model.post_level({})
					.then(res=>{
						console.log(res.data)
					})
			},
			post_log_list() {

				this.model.post_log_list({
						page_size:20,
						current_page:1
				})
			}
		},
		ready() {

			this.post_level()
			this.post_log_list()


			this.$http.get('./exchangeable/coupon/list',{})
                .then(function(response){
                    this.couponList = response.data.data
                })

			

			
		}

	}
</script>