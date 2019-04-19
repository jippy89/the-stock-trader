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
				background-color="#545c64"
				text-color="#fff"
				active-text-color="lightgreen">
				<el-menu-item index="/" class="home"></el-menu-item>
				<el-menu-item index="/portfolio" :class="{ 'is-active': $route.path === activeIndex ? false : true }">Portfolio</el-menu-item>
				<el-menu-item index="/stocks" :class="{ 'is-active': $route.path === activeIndex ? false : true }">Stocks</el-menu-item>
			</el-menu>
		</el-col>
		<el-col :offset="9" :span="2">
			<el-button type="warning" plain>
				End Day
			</el-button>
		</el-col>
		<el-col :span="3">
			<el-dropdown>
				<el-button type="primary">
				Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>Action 1</el-dropdown-item>
					<el-dropdown-item>Action 2</el-dropdown-item>
					<el-dropdown-item>Action 3</el-dropdown-item>
					<el-dropdown-item>Action 4</el-dropdown-item>
					<el-dropdown-item>Action 5</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-row>
</template>

<script>
	// import { Container, NavMenu } from 'element-ui'

	export default {
		data() {
			return {
				activeIndex: null
			}
		},
		watch: {
			$route (to, from) {
				this.activeIndex = to.path === '/' ? undefined : to.path;
				console.log(to)
				console.log(this.activeIndex)
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
		background-color: #545c64;
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
	

	.el-menu-item {
		transition: all .3s !important;
	}

	.el-menu-item:hover {
		font-weight: 600;
		color: lightgreen!important;
	}
</style>