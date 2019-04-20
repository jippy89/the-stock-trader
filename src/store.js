import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	money: 3000
  },
  getters: {
  	money: state => state.money
  },
  mutations: {
  	addMoney(state, { amount }) {
  		if(typeof amount === 'number')  this.state.money += amount
		else console.log("Property 'amount' must be a number type")
  	},
  	subtractMoney(state, { amount }) {
  		if(typeof amount === 'number')  this.state.money -= amount
		else console.log("Property 'amount' must be a number type")
  	}
  },
  actions: {

  }
})
