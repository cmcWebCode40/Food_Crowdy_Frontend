import React, { useState, createContext, useEffect } from 'react';
import { getUserId } from '../../utils/localStorageItems';
import { ProductsApi, userApi } from '../../api/Api';
import { Cart } from '../../utils/cart';

/**
 * using a global notification state for user signup and sign in
 */

export const contextApi = createContext();

const ContextProvider = ({ children }) => {
	const [notifications, setNotifications] = useState(false);
	const [updateCart, setUpdateCart] = useState(false);
	const [loadingCart, setLoadingCart] = useState(false);
	const getAuth = JSON.parse(localStorage.getItem('_token'));
	const userId = getUserId();
	// console.log(userId);

	/**
	 * ********Cart Manipulations Functions**********
	 */

	//Adding Cart Items
	const addToLocalStorage = (data, id) => {
		let cart = JSON.parse(localStorage.getItem('_cart'));
		const storeCart = new Cart(cart || {});
		storeCart.add(data, id);
		localStorage.setItem('_cart', JSON.stringify(storeCart));
	};

	const addItemToCartDb = async (id) => {
		try {
			await ProductsApi.get(`/add-to-cart/${id}?userId=${userId}`);
			setUpdateCart(!updateCart);
		} catch (error) {}
	};

	const addItemToCart = async (id) => {
		const userId = getUserId();

		if (userId !== null) {
			addItemToCartDb(id);
		} else {
			try {
				const res = await ProductsApi.get(`/add-to-cart/${id}`);
				if (res.data.message) {
					addToLocalStorage(res.data.item, id);
					setUpdateCart(!updateCart);
				}
			} catch (error) {}
		}
	};

	//Reducing items from Cart//
	const reduceItemLocalStorage = (id) => {
		let cart = JSON.parse(localStorage.getItem('_cart'));
		const storeCart = new Cart(cart);
		storeCart.reduceByOne(id);
		localStorage.setItem('_cart', JSON.stringify(storeCart));
	};

	const reducItemFromCartDb = async (id) => {
		setLoadingCart(true);
		try {
			await ProductsApi.get(`/reducecartitem/${id}?userId=${userId}`);
			setUpdateCart(!updateCart);
		} catch (error) {}
		setLoadingCart(false);
	};

	const reduceItemQty = async (id) => {
		const userId = getUserId();
		if (userId !== null) {
			reducItemFromCartDb(id);
		} else {
			try {
				const res = await ProductsApi.get(`/reducecartitem/${id}`);
				if (res.data.id) {
					reduceItemLocalStorage(id);
					setUpdateCart(!updateCart);
				}
			} catch (error) {}
		}
	};

	//Removing Cart Items ..
	const removeItemLocalStorage = (id) => {
		let cart = JSON.parse(localStorage.getItem('_cart'));
		if (Object.keys(cart.items).length === 1) {
			return localStorage.removeItem('_cart');
		}
		const storeCart = new Cart(cart);
		storeCart.removeItem(id);
		localStorage.setItem('_cart', JSON.stringify(storeCart));
	};

	const removeItemFromCartDb = async (id) => {
		setLoadingCart(true);
		try {
			const res = await ProductsApi.get(
				`/removecartitem/${id}?userId=${userId}`
			);
			setUpdateCart(!updateCart);
			console.log(res);
			setLoadingCart(false);
		} catch (error) {}
	};

	const removeItemQty = async (id) => {
		const userId = getUserId();
		if (userId !== null) {
			removeItemFromCartDb(id);
		} else {
			try {
				const res = await ProductsApi.get(`/removecartitem/${id}`);
				if (res.data.id) {
					removeItemLocalStorage(id);
					setUpdateCart(!updateCart);
				}
			} catch (error) {}
		}
	};

	/**
	 * *Logout Current user **
	 */

	const logoutUser = async (e, history) => {
		e.preventDefault();
		console.log('logout');
		const token = JSON.parse(localStorage.getItem('_token'));
		console.log(token);

		try {
			await userApi.post(`/logout`, {
				headers: {
					'content-Type': 'application/json',
					'Authorization': `Bearer  ${token}`
				}
			});
			localStorage.removeItem('_token');
			history.push('/');
		} catch (error) {
			console.log({ error });
		}
	};

	const searchApiCall = async (categoryUrl) => {
		const res = await ProductsApi.get(categoryUrl);
		return res;
	};

	useEffect(() => {}, [notifications]);

	return (
		<contextApi.Provider
			value={{
				notifications,
				setNotifications,
				getAuth,
				updateCart,
				setUpdateCart,
				addItemToCart,
				logoutUser,
				searchApiCall,
				reduceItemQty,
				removeItemQty,
				loadingCart
			}}>
			{children}
		</contextApi.Provider>
	);
};

export default ContextProvider;
