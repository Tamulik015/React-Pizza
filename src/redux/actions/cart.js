export const addNewPizza = (pizzaObj)=> ({
	type: 'ADD_TO_PIZZA',
	payload: pizzaObj
})

export const deletePizzas = ()=> ({
	type: 'DELETE_PIZZAS'
})

export const removePizza = (id)=> ({
	type: 'REMOVE_PIZZAS',
	payload: id
})

export const plusElemCart = (id)=> ({
	type: 'PLUS_ELEM',
	payload: id
})

export const minusElemCart = (id)=> ({
	type: 'MINUS_ELEM',
	payload: id
})