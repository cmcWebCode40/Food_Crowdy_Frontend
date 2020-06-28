export function Cart(oldCart) {
	this.items = oldCart.items || {};
	this.totalQuantity = oldCart.totalQuantity || 0;
	this.totalPrice = oldCart.totalPrice || 0;
	this.add = function (item, id) {
		var storedItem = this.items[id];
		if (Object.keys(this.items).indexOf(id) === -1) {
			var storedItem = (this.items[id] = { item: item, quantity: 0, price: 0 });
		}
		storedItem.quantity++;
		storedItem.price = storedItem.quantity * storedItem.item.price;
		this.totalQuantity++;
		this.totalPrice += storedItem.item.price;
	};
	this.generateArray = function () {
		let arr = [];
		for (let id in this.items) {
			arr.push(this.items[id]);
		}
		return arr;
	};
	this.reduceByOne = function (id) {
		this.items[id].quantity--;
		this.items[id].price -= this.items[id].item.price;
		this.totalQuantity--;
		this.totalPrice -= this.items[id].item.price;
	};
	this.removeItem = function (id) {
		this.totalQuantity -= this.items[id].quantity;
		this.totalPrice -= this.items[id].price;
		delete this.items[id];
	};
}

// export function Cart(oldCart) {
// 	this.items = oldCart.items || {};
// 	this.totalQuantity = oldCart.totalQuantity || 0;
// 	this.totalPrice = oldCart.totalPrice || 0;

// 	this.add = function (item, id) {
// 		const storedItem = this.items[id];
// 		if (Object.keys(this.items).indexOf(id) === -1) {
// 			this.items[id] = {
// 				item: item,
// 				quantity: 0,
// 				price: 0
// 			};
// 			this.totalQuantity++;
// 		} else {
// 			storedItem.quantity++;
// 			storedItem.price = storedItem.quantity * storedItem.item.price;
// 			this.totalQuantity++;
// 			this.totalPrice += storedItem.item.price;
// 		}

// 		return storedItem;
// 	};
// 	this.generateArray = function () {
// 		let arr = [];
// 		for (let id in this.items) {
// 			arr.push(this.items[id]);
// 		}
// 		return arr;
// 	};
// }
