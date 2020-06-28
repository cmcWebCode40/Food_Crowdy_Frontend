import { userApi } from '../api/Api';
export const getProductId = () => localStorage.getItem('_productId');
export const getCartItems = () => localStorage.getItem('_cart');

// localStorage.setItem('_productId',JSON.stringify('www.com'))

export const getBulkBuyCartItems = () => localStorage.getItem('_bulkBuyCart');

export const getOldUrl = () => localStorage.getItem('_oldUrl');

export const getUserName = () => {
	if (localStorage.getItem('_user')) {
		const nameID = JSON.parse(localStorage.getItem('_user'));
		return nameID.name;
	} else {
		return null;
	}
};

export const getUserId = () => {
	if (localStorage.getItem('_user')) {
		const userID = JSON.parse(localStorage.getItem('_user'));
		return userID.id;
	} else {
		return null;
	}
};

export const getCartTotal = () => {
	const cart = JSON.parse(localStorage.getItem('_cart'));
	if (cart !== null) {
		return cart.totalQuantity;
	} else {
		return null;
	}
};

//function that clears users local storage offline details

export const clearUserOfflineDatas = () => {
	localStorage.removeItem('_cart');
	localStorage.removeItem('_bulkBuyCart');
	localStorage.removeItem('_productId');
};

//Function To display cart tptal Badge

export const cartBadge = async () => {
	const cart = JSON.parse(localStorage.getItem('_cart'));
	const bulkCart = JSON.parse(localStorage.getItem('_bulkBuyCart'));
	const user = JSON.parse(localStorage.getItem('_user'));

	if (user !== null) {
		try {
			const res = await userApi.get(`/renderallcarts/${user.id}`);
			return await res.data.totalItems;
		} catch (error) {
			// console.log({ error });
		}
	} else {
		if (!cart && !bulkCart) {
			return null;
		} else if (cart !== null && bulkCart === null) {
			return cart.totalQuantity;
		} else if (bulkCart !== null && cart === null) {
			return bulkCart.totalQuantity;
		} else if (bulkCart && cart) {
			return bulkCart.totalQuantity + cart.totalQuantity;
		}
	}
};

// cartBadge();
