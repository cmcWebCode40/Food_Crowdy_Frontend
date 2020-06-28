import React, { useEffect, useContext } from 'react';
import { contextApi } from '../context/Context';
import { getUserName, getCartTotal } from '../../utils/localStorageItems';
import { Link } from 'react-router-dom';
import Logo from '../header/Logo';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
	const userDetails = getUserName();
	const { updateCart } = useContext(contextApi);
	const cartTotal = getCartTotal();

	useEffect(() => {}, [updateCart]);

	return (
		<div className='navbar'>
			<div className='navbar-grid'>
				<div className='logo'>
					<Logo />
				</div>
				<ul className='nav-box'>
					<li className='navbar-user'>
						<Link to='/customer/account/profile'>{<PersonOutlineIcon />}</Link>
					</li>
					<li className='navbar-cart'>
						<Link to='/cart'>
							{cartTotal && <span className='badge badge-sm'>{cartTotal}</span>}
							<ShoppingCartIcon color='inherit' />
						</Link>
					</li>
				</ul>
			</div>
			<div className='nav-search-bar'>
				<form>
					<input
						type='text'
						placeholder='search food items,bulk share and category'
					/>
					<button type='submit'>
						<SearchIcon fontSize='inherit' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default NavBar;
