import React, { useEffect, useContext, useState, useReducer } from 'react';
import { SearchByCategory } from '../../utils/reducer/SearchByCategory';
import Products from '../../pages/ProductCategory';
import { ProductsApi } from '../../api/Api';
import { contextApi } from '../context/Context';
// import UseFetch from '../hooks/UseFetch';
import Checkbox from '@material-ui/core/Checkbox';
// import { Media } from '../backdrop/AppShell';

const AllProduct = ({ match }) => {
	// const { data, loading } = UseFetch(`/all`);
	const [state, dispatch] = useReducer(SearchByCategory, []);
	const { searchApiCall } = useContext(contextApi);
	const [checked, setChecked] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [checked3, setChecked3] = useState(false);
	const [checked4, setChecked4] = useState(false);
	const [checked5, setChecked5] = useState(false);
	const [checked6, setChecked6] = useState(false);
	const [waiting, setWaiting] = useState(false);
	const [query, SetQuery] = useState('');

	const categorySeaerchFunction = (url, category) => {
		searchApiCall(url).then((data) => {
			dispatch({ type: category, payload: data.data });
			setWaiting(false);
		});
		// .finally(setWaiting(false));
	};

	const querySearch = async (query) => {
		const res = await ProductsApi.get(`/all?title=${query}`);
		console.log(res.data);
		console.log(query);
		if (res.data.length === 0) {
			console.log('nothing');
		} else {
			dispatch({ type: 'FISH', payload: res.data });
		}
	};
	const handleChange = (url, category) => {
		setWaiting(true);
		switch (category) {
			case 'FISH':
				setChecked(!checked);
				categorySeaerchFunction(url, category);
				break;
			case 'MEAT':
				setChecked2(!checked2);
				categorySeaerchFunction(url, category);
				break;
			case 'FRIUTS':
				setChecked3(!checked3);
				categorySeaerchFunction(url, category);
				break;
			case 'VEGETABLES':
				setChecked4(!checked4);
				categorySeaerchFunction(url, category);
				break;
			case 'CONDINMENTS':
				setChecked5(!checked5);
				categorySeaerchFunction(url, category);
				break;
			case 'FOODSTUFFS':
				setChecked6(!checked6);
				categorySeaerchFunction(url, category);
				break;
			default:
				break;
		}
		// setChecked(!checked);
	};

	useEffect(() => {
		categorySeaerchFunction(`/category/${match.params.name}`, 'ALL');
		// if (data) {
		// 	dispatch({ type: 'FISH', payload: data });
		// }
	});
	return (
		<>
			<div className='shoping'>
				<div className='shoping-search'>
					<h4>Search by Category</h4>
					<form>
						<input
							type='text'
							style={{ width: '100%' }}
							onChange={(e) => {
								SetQuery(e.target.value);
								querySearch(query);
							}}
							placeholder='search for food  items by category'
						/>
						{/* <button type='submit'>Submit</button> */}
					</form>
					<div>
						<Checkbox
							color='primary'
							checked={checked}
							onChange={() => handleChange(`/category/fish`, 'FISH')}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Fish & seafoood
					</div>
					<div>
						<Checkbox
							color='primary'
							checked={checked2}
							onChange={() => handleChange(`/category/fruits`, 'FRUITS')}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Fruits & Nuts
					</div>
					<div>
						<Checkbox
							color='primary'
							checked={checked3}
							onChange={() =>
								handleChange(`/category/vegetables`, 'VEGETABLES')
							}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Vegetables
					</div>
					<div>
						<Checkbox
							color='primary'
							checked={checked4}
							onChange={() =>
								handleChange(`/category/condinments`, 'CONDIMENTS')
							}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Condiments
					</div>
					<div>
						<Checkbox
							color='primary'
							checked={checked5}
							onChange={() => handleChange(`/category/meat`, 'MEAT')}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Cow,Goat,Chicken
					</div>
					<div>
						<Checkbox
							color='primary'
							checked={checked6}
							onChange={() =>
								handleChange(`/category/foodstuffs`, 'FOODSTUFFS')
							}
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
						Foodstuffs
					</div>
				</div>
				<Products waiting={waiting} state={state} />
			</div>
		</>
	);
};

export default AllProduct;
