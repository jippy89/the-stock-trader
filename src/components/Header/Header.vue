<template>
	<el-row id="navbar" type="flex" :gutter="3" align="middle">
		<el-col :span="5">
			<router-link id="brand" tag="div" to="/" exact>
				<h1>The Stock Trader</h1>
			</router-link>
		</el-col>
		<!-- <el-col :span="2" class="nav-item">
			<router-link tag="p" to="/portfolio">Portfolio</router-link>
		</el-col>
		<el-col :span="2" class="nav-item">
			<router-link tag="p" to="/stocks" >Stocks</router-link>
		</el-col> -->
		<el-col :span="4">
			<el-menu
				mode="horizontal"
				:router="true"
				:default-active="$route.path"
				background-color="rgb(21,13,72)"
				text-color="#fff"
				active-text-color="lightgreen">
				<el-menu-item index="/" class="home"></el-menu-item>
				<el-menu-item index="/portfolio">Portfolio</el-menu-item>
				<el-menu-item index="/stocks">Stocks</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :offset="7" :span="2" class="funds">
			<small>Current Funds <strong>{{ funds | currency }}</strong></small>
		</el-col>
		<el-col :span="2">
			<el-button type="warning" @click="endDay">
				End Day
			</el-button>
		</el-col>
		<el-col :span="3">
			<el-dropdown :show-timeout="0" :hide-timeout="0">
				<el-button type="primary">
				Progress<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>Save Progress</el-dropdown-item>
					<el-dropdown-item>Load Progress</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-row>
</template>

<script>
	import { mapActions } from 'vuex'
	import filters from '@/mixins/filters'

	export default {
		mixins: [filters],
		computed: {
			funds() { return this.$store.getters["funds"] }
		},
		methods: {
			...mapActions([
				"randomizeStocks"
			]),
			endDay(){
				this.randomizeStocks()
			}
		}
	}
</script>

<style scoped>
	#brand {
		transition: color .5s;
		cursor: pointer;
		margin-left: 1em;
		margin-right: 1em;
	}
	
	#brand:hover {
		color: lightgreen;
	}

	#navbar {
		color: #fff;
		background-color: rgb(21,13,72);
		/*float: right!important;*/
		margin-top: auto;
		margin-bottom: auto;
		/*margin-left: auto!important;*/
		/*padding: 0 1em;*/
	}

	.home {
		display:none!important;
	}

	.router-link-active{
		color: lightgreen;
	}

	.el-menu {
		border-bottom: none!important;
	}
	
	.is-active {
		background-color: rgb(34,21,108)!important;
	}

	.el-menu-item, .funds {
		transition: all .3s !important;
	}

	.el-menu-item:hover {
		/*font-weight: 600;*/
		color: lightgreen!important;
		background-color: rgb(34,21,89)!important;
	}

	.funds:hover {
		color: lightgreen;
	}
</style>