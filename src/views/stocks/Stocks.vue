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
	export default {
		components: {
			Stock
		},
		data(){
			return {
				stocks: [
					{id: 1, name: 'BMW', price: 110},
					{id: 2, name: 'Google', price: 200},
					{id: 3, name: 'Apple', price: 250},
					{id: 4, name: 'Twitter', price: 250},
					{id: 5, name: 'Audi', price: 120}
				]
			}
		}
	}
</script>

<style scoped>
	.stock-container {
		margin-left: 8em;
		margin-right: 8em;
	}
</style>