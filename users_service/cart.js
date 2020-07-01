module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    // this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.add = function(item, id){
        var storedItem = this.items[id]
        if(Object.keys(this.items).indexOf(id) == -1){ 
            var storedItem = this.items[id] = {item: item, quantity: 0, price: 0};
        }
        storedItem.quantity += storedItem.item.numberOfParts;
        storedItem.price = storedItem.quantity * storedItem.item.price;
        // this.totalQuantity += storedItem.item.numberOfParts
        this.totalPrice += storedItem.price
    }
    this.generateArray = function(){
        let arr = []
        for (let id in this.items){
            arr.push(this.items[id])
        }
        return arr
    }
    this.removeItem = function(id){
        this.totalQuantity -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id]
    }
}