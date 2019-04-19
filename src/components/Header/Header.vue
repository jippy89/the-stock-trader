<template>
	<el-menu
		:default-active="activeIndex"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b">
		<el-menu-item index="0">
			<div slot="title">
				<small>Icon</small>
				THE STOCK TRADER
			</div>
		</el-menu-item>
		<el-menu-item index="1">
			<div slot="title">
				Portfolio
			</div>
		</el-menu-item>
		<el-menu-item index="2">Stocks</el-menu-item>
	</el-menu>
</template>

<script>
	import { NavMenu } from 'element-ui'

	export default {
		data() {
			return {
				activeIndex: '0'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				this.$router.push(this.$router.options.routes[key])
			}
		}
	}
</script>

<style scoped>
	.el-menu {
		padding: 0 13px;
	}
</style>