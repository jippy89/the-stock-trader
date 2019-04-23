<template>
  <div class="home">
  	<h1>Trade or View your portfolio</h1>
  	<h6>You may Save & Load your data</h6>	
  	<h6>Click on 'End Day' to begin a New Day!</h6>
  	<hr>
	<p>Your current funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import filters from '@/mixins/filters'


export default {
  mixins: [filters],
  name: 'home',
  computed: {
  	...mapGetters([
  		"funds"
	])
  }
}
</script>

<style scoped>
	* {
		color: #29d;
	}
	hr {
		color: rgb(21,13,72);
		border: 1px solid rgb(21,13,72);
	}
</style>