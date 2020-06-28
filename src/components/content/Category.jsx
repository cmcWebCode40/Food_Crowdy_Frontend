import React from 'react';
import { Link } from 'react-router-dom';
import fruits from '../../images/fruits (4).svg';
import condinments from '../../images/condinments (4).svg';
import packagedFood from '../../images/packagedfood (3).svg';
import foodItems from '../../images/foodItems (3).svg';

const Category = () => {
	return (
		<>
			<div className='heading'>
				<span></span>
				<h3>Categories</h3>
				<span></span>
			</div>
			<div className='category'>
				<Link to='/category/fruits'>
					<img src={fruits} alt='fruits' />
				</Link>
				<Link to='/category/ingredients'>
					<img src={condinments} alt='ingrdients' />
				</Link>
				<Link to='/category/meats'>
					<img src={packagedFood} alt='packaged foods' />
				</Link>
				<Link to='/category/foodItmes'>
					<img src={foodItems} alt=' food Items' />
				</Link>
			</div>
		</>
	);
};

export default Category;
