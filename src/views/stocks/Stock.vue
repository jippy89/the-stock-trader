<template>
	<el-col :span="8">
		<el-card shadow="hover">
			<el-row slot="header" type="flex" justify="space-between" align="middle">
				<span>{{ stock.name }}</span>
				<small>Current Price: {{ stock.price | currency }}</small>
				<!-- <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button> -->
			</el-row>
			<el-row type="flex" justify="space-around" align="middle">
				<el-input-number v-model="quantity" @change="handleChange" :min="1"></el-input-number>
				<el-button 
					:type="insufficientFunds ? 'warning':'success'" 
					@click="buyStock" 
					:disabled="insufficientFunds">
					Buy
				</el-button>
			</el-row>
		</el-card>
	</el-col>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import filters from '@/mixins/filters'

	export default {
		mixins: [filters],
		props: {
			stock: {
				type: Object,
				required: true
			}
		},
		computed: {
			...mapGetters([
				"funds"
			]),
			insufficientFunds(){
				return this.funds < ( this.quantity * this.stock.price )
			}
		},
		data() {
			return {
				quantity: 1
			}
		},
		methods: {
			handleChange(value) {
				// console.log(value)
			},
			buyStock(){
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				}
				this.$store.dispatch('buyStock', order)
				this.quantity = 1
			}
		}
	}
</script>

<style scoped>
	.el-card {
		background: rgb(0,0,34);
		border: 1px solid rgba(0,55,144,1)!important;
		color: #fff;
		margin: .3em;
	}

	>>> .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
	    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,255,.2);
	    box-shadow: 0 2px 12px 0 rgba(0,0,255,.2);
	}

	>>> div.el-card__header {
		color: rgb(0,214,89);
		background-color: rgb(0,0,55);
		border-bottom: 1px solid rgba(0,55,144,1);
	}

	.el-button--success {
		color: #FFF;
		background-color: rgb(0,198,55);
		border-color: rgb(0,198,55);
	}
</style>