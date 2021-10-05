import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories ({activeCategory, items, onClickCategory}) {

	return (
		<div>
			<div className="categories">
              <ul>
                <li onClick={()=> onClickCategory(null)} className={activeCategory === null && "active"}>Все</li>
                {items.map((elem, i) => (
					<li className={activeCategory === i ? "active" : '' } onClick={()=> onClickCategory(i)} key={i}>{elem}</li>
				))}
              </ul>
            </div>
		</div>
	);
	}
)

Categories.propTypes = {
	activeCategory: PropTypes.oneOf([PropTypes.number, null]).isRequired,
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func
}

Categories.defaultProps = {activeCategory:null, items:[]}

export default Categories;