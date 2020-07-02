import React, { useState, useContext, useEffect } from 'react';
import { contextApi } from '../context/Context';
import { userApi } from '../../api/Api';
import { getUserId } from '../../utils/localStorageItems';
import Button from '@material-ui/core/Button';
import MobileCartView from './CartMobile';
import CartItmes from './CartItem';
import { Link } from 'react-router-dom';
import cartImage from '../../images/commerce.png';

export default function Cart() {
	const [totalAmount, setTotalAmount] = useState(0);
	const [cartList] = useState([]);
	const { updateCart, loadingCart } = useContext(contextApi);
	const userID = getUserId();
	const cart = JSON.parse(localStorage.getItem('_cart'));

	const getCartFromDb = async () => {
		try {
			const res = await userApi.get(`/renderallcarts/${userID}`);
			if (res.data.cart) {
				Object.values(res.data.cart).forEach((item) => {
					Object.values(item).forEach((carts) => {
						cartList.push(carts);
					});
				});
				setTotalAmount(res.data.cart.totalPrice);
			}
			// console.log(cartList);
		} catch (error) {
			// console.log({ error });
		}
	};

	if (userID !== null) {
		//make a request..
		getCartFromDb();
	} else {
		if (cart !== null) {
			Object.values(cart).forEach((item) => {
				Object.values(item).forEach((carts) => {
					cartList.push(carts);
				});
			});
		}
	}

	useEffect(() => {}, [updateCart, userID]);
	return (
		<div className={'cart'}>
			{!cart && userID === null ? (
				<div className='cart-empty'>
					<h3>CART</h3>
					<div className='cart-empty-img'>
						<img src={cartImage} alt='no cart available' />
						<p>
							<strong>Your cart is empty</strong>
						</p>
						<p>Browse our categories and discover our best deals!</p>
					</div>
					<Link to={`/shop-now`}>
						<Button variant='contained' size='large' color='primary'>
							<strong>START SHOPPING</strong>
						</Button>
					</Link>
				</div>
			) : (
				<>
					{loadingCart ? (
						<h3>Loading</h3>
					) : (
						<>
							<h3 className='cartR-title'>My Cart(3)</h3>
							<CartItmes cartDisplay={cartList} totalAmount={totalAmount} />
							<MobileCartView />
							<div className='cart-checkout'>
								<Link to={`/shop-now`}>
									<Button
										variant='outlined'
										size='large'
										fullWidth
										color='inherit'>
										<strong>CONTINUE SHOPPING</strong>
									</Button>
								</Link>
								<Link to={`/checkout/verify_contents`}>
									<Button variant='contained' size='large' color='primary'>
										<strong>PROCEED TO CHECKOUT</strong>
									</Button>
								</Link>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
}
