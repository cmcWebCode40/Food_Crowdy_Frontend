import React, { useEffect, useContext, useReducer } from 'react';
import { SearchByCategory } from '../../utils/reducer/SearchByCategory';
import AllActiveBulkshare from '../product/AllActiveBulkshare';
import { contextApi } from '../context/Context';
import Checkbox from '@material-ui/core/Checkbox';
import UseFetch from '../hooks/UseFetch';

const BulkBuyProducts = () => {
	const [state, dispatch] = useReducer(SearchByCategory, []);
	const { searchApiCall } = useContext(contextApi);
	const { data,  } = UseFetch(`/all`);
	const [checked, setChecked] = React.useState({ meat: false, fish: false });
	console.log(state);

	const handleChange = (event) => {
		// setChecked('');
		setChecked({ [event]: true });
		console.log(checked);
		searchApiCall()

		// const fish = fishResult('/category/:category');
		// dispatch({ type: 'FISH', payload: fish });
		// setChecked(event.target.checked);
	};

	// const handleChange1 = (event) => {
	// 	setChecked('');
	// 	setChecked(!checked);
	// 	console.log(checked);

	// 	// const condi = Ingredient();
	// 	// dispatch({ type: 'INGREDIENT', payload: condi });
	// 	// setChecked(event.target.checked);
	// 	// console.log(checked);
	// };

	useEffect(() => {
		if (data) {
			dispatch({ type: 'FISH', payload: data });
		}
	}, [data]);
	return (
		<>
			<div className='shoping'>
				<div className='shoping-search'>
					<h4>Search by Category</h4>
					<form>
						<input
							type='text'
							placeholder='search for food  items by category'
							style={{ width: '100%' }}
						/>
					</form>
					<div>
						{/* <input
						type='checkbox'
						onChange={handleChange}
						name='sdcksd'
						id='dckjsd'
						checked={checked}
					/> */}
						<Checkbox
							color='primary'
							checked={checked}
							onChange={() => handleChange('meat')}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Fish & seafoood
					</div>
					<div>
						<Checkbox
							color='primary'
							checked={checked}
							onChange={() => handleChange('fish')}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Fruits & Nuts
					</div>
					{/* <div>
					<Checkbox
						color='primary'
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					Vegetables
				</div>
				<div>
					<Checkbox
						color='primary'
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					Condiments
				</div>
				<div>
					<Checkbox
						color='primary'
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					Cow,Goat,Chicken
				</div> */}
				</div>
				<AllActiveBulkshare state={state} />
			</div>
		</>
	);
};

export default BulkBuyProducts;
