import React, { useEffect, useContext, useState, useReducer } from 'react';
import { SearchByCategory } from '../../utils/reducer/SearchByCategory';
import Products from '../product/AllProduct';
// import { ProductsApi } from '../../api/Api';
import { contextApi } from '../context/Context';
import UseFetch from '../hooks/UseFetch';
import Checkbox from '@material-ui/core/Checkbox';

const AllProduct = () => {
	const { data, loading } = UseFetch(`/`);
	const [state, dispatch] = useReducer(SearchByCategory, []);
	const { searchApiCall } = useContext(contextApi);
	const [checked, setChecked] = useState({ meat: false, fish: false });

	const handleChange = (event) => {
		// setChecked('');
		// setChecked({ [event]: true });
		// console.log(checked);
		// const fish = fishResult('/category/:category');
		// dispatch({ type: 'FISH', payload: fish });
		// setChecked(event.target.checked);
	};

	const handleChange1 = (event) => {
		// setChecked('');
		// setChecked(!checked);
		// console.log(checked);
		// const condi = Ingredient();
		// dispatch({ type: 'INGREDIENT', payload: condi });
		// setChecked(event.target.checked);
		// console.log(checked);
	};

	useEffect(() => {
		if (data) {
			dispatch({ type: 'FISH', payload: data });
		}
		// const getProducts = async () => {
		// 	try {
		// 		setLoading(true);
		// 		const res = await ProductsApi.get('/');
		// 		setData(res.data);
		// 		dispatch({ type: 'FISH', payload: res.data });
		// 		setLoading(false);
		// 		console.log(res);
		// 	} catch (error) {
		// 		// setError(error);
		// 		setLoading(false);
		// 	}
		// };
		// getProducts();
		// console.log(data);
		// console.log(state);
	}, [data]);
	return (
		<>
			<div className='shoping'>
				<div className='shoping-search'>
					<h4>Search by Category</h4>
					<form>
						<input
							type='text'
							style={{width:'100%'}}
							placeholder='search for food  items by category'
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
				<Products state={state} />
			</div>
		</>
	);
};

export default AllProduct;
