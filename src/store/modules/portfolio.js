const state = {
  	funds: 3000,
  	stocks: []
}

const getters = {
  	funds: state => state.funds,
  	stockPortfolio: (state, getters) => state.stocks.map( stock => {
  		const record = getters.stocks.find(element => element.id == stock.id)
  		return {
  			id: stock.id,
  			quantity: stock.quantity,
  			name: record.name,
  			price: record.price
  		}
  	})
}

const mutations = {
	'BUY_STOCK'( state, { stockId, quantity, stockPrice} ) {
		const record = state.stocks.find( element => element.id == stockId )
		if( record ) {
			record.quantity += quantity
		} else {
			state.stocks.push({
				id: stockId,
				quantity: quantity,

			})
		}
		state.funds -= stockPrice * quantity
	},
	'SELL_STOCK' ( state, { stockId, quantity, stockPrice } ) {
		const record = state.stocks.find( element => element.id == stockId )
		if( record.quantity > quantity ) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1)
		}
		state.funds += stockPrice * quantity
	},
	'SET_PORTFOLIO' (state, { stockPortfolio, funds }) {
		state.funds = funds;
		state.stocks = stockPortfolio ? stockPortfolio : []
	}
}

const actions = {
	sellStock({commit}, order) {
		commit('SELL_STOCK', order)
	}
}

export default { state, getters, mutations, actions }