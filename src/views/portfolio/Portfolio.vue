<template>
	<el-row>
		<h4>List of Current Portfolio In-Hold</h4>
		<div class="stock-container">
			<transition-group name="move">
				<Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
			</transition-group>
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
			...mapGetters({
				stocks: "stockPortfolio"
			})
		}
	}
</script>

<style scoped>
	.stock-container {
		margin-left: 8em;
		margin-right: 8em;
	}

	.move-move {
		transition: all .5s;
	}
</style>