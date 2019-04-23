<template>
	<el-row>
		<h4>List of Available Stocks</h4>
		<div class="stock-container">
			<Stock v-for="stock in stocks" :stock="stock"></Stock>
		</div>
	</el-row>
</template>

<script>
	import Stock from './Stock.vue'
	import { mapGetters } from 'vuex'

	export default {
		components: {
			Stock
		},
		computed: {
			...mapGetters([
				"stocks"
			])
		}
	}
</script>

<style scoped>
	.stock-container {
		margin-left: 8em;
		margin-right: 8em;
	}
</style>