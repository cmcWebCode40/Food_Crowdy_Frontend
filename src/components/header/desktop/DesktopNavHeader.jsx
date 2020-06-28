import React, { useContext, useEffect } from 'react';
import { contextApi } from '../../context/Context';
import { getCartTotal, cartBadge } from '../../../utils/localStorageItems';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Logo from '../Logo';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DesktopLinks from './DesktopHeaderLinks';

const useStyles = makeStyles(() => ({
	icon: {
		padding: '0.4rem 0 0 0'
	},
	btn: {
		color: '#000 !important',
		fontWeight: '600'
	}
}));

const DesktopNavHeader = () => {
	const { updateCart } = useContext(contextApi);
	const classes = useStyles();
	const cartTotal = '';

	useEffect(() => {
		console.log(cartTotal);
	}, [updateCart]);

	return (
		<div className='largenav'>
			<div className='largenav-logo'>
				<Logo />
			</div>
			<div className='largenav-search'>
				<form>
					<input type='text' placeholder='search for food items' />
					<Button type='submit' variant='contained' color='primary'>
						<span className={classes.btn}>
							<strong>SEARCH</strong>{' '}
						</span>
					</Button>
				</form>
			</div>
			<div className='largenav-links'>
				<DesktopLinks />
				<Link className='color-black' to='/help/FAQS'>
					<HelpOutlineIcon className={classes.icon} /> <strong>HELP</strong>
				</Link>
				<Link className='color-black' to='/cart'>
					{cartTotal && <span className='badge'>{cartTotal}</span>}
					<ShoppingCartIcon className={classes.icon} /> <strong>CART</strong>
				</Link>
			</div>
		</div>
	);
};

export default DesktopNavHeader;
