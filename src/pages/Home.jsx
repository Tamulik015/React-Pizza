import React from 'react';
import {Categories, SortPopup, PizzaBlock,PizzaLoader} from '../components'; 
import {useSelector, useDispatch} from 'react-redux';
import {setCategory, setSortBy} from '../redux/actions/filter';
import {fetchPizzas} from '../redux/actions/pizzas';
import {addNewPizza} from '../redux/actions/cart';

const categoryName = ['Мясные', 'Вегетарианская','Гриль','Острые','Закрытые'];
const sortItems = [
	{name:'популярности', type:'popular', order:'desc'},
	{name:'цене', type:'price', order:'desc'},
	{name:'алфавиту', type:'name', order:'asc'}
]

const Home = ()=> {
	const items = useSelector(({pizzasReducer})=> pizzasReducer.items);
	const isLoaded = useSelector(({pizzasReducer})=> pizzasReducer.isLoaded);
	const cartItems = useSelector(({cartReducer})=> cartReducer.items);
	const {sortBy, category} = useSelector(({filterReducer})=> filterReducer);
	const dispatch = useDispatch();

	
	React.useEffect(()=> {
	  dispatch(fetchPizzas(sortBy,category));
	}, [category, sortBy]);
	
	
	const onSelectCategory = React.useCallback((index)=> {
		dispatch(setCategory(index))
	}, []);
	
	const onClickSort = React.useCallback((type)=> {
		dispatch(setSortBy(type))
	}, []);
	
	const handleAddPizzaToCart = obj => {
		dispatch(addNewPizza(obj));
	}
	
	return (
		<div className="container">
          <div className="content__top">
            <Categories activeCategory={category} items={categoryName} onClickCategory={onSelectCategory}/>

			<SortPopup onClickSort={onClickSort} activeTypeSort={sortBy.type} items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
			<div className='content__items'>
			  {isLoaded ? items.map((obj,i) => (<PizzaBlock 
			  addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} onAddPizza={handleAddPizzaToCart} key={i} {...obj} />)): 
			  Array(12).fill(0).map((elem,index)=> <PizzaLoader key={index} />)}
			</div>
        </div>
	);
}

export default Home;