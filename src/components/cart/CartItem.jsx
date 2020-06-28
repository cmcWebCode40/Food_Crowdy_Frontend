import React, { useState, useContext, useEffect } from 'react';
import { contextApi } from '../context/Context';
// import Button from '@material-ui/core/Button';
import meat from '../../images/meat.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
	button: {
		// background: 'red',
		color: 'red',
		fontWeight: '600',
		margin: '0  0 -.3rem  0'
	}
}));

const formatter = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN'
});

const CartItem = ({ cartDisplay, totalAmount }) => {
	// const [disableBtn, setDisableBtn] = useState(false);
	// const [count, setCount] = useState('');
	const {
		// addItemToCart,
		// reduceItemQty,
		// removeItemQty,
		updateCart,
		loadingCart
	} = useContext(contextApi);
	const classes = useStyles();

	useEffect(() => {
		console.log('mike');
	}, [updateCart]);
	// let disableBtn;
	return (
		<>
			{loadingCart ? (
				<h2>loading....</h2>
			) : (
				<div className='cart-table'>
					<table>
						<thead>
							<tr>
								<th>Product</th>
								<th>Type</th>
								<th>Portions</th>
								<th>Unit Price</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='cart-image'>
									<div>
										<img height='50' src={meat} alt={'alsckal'} />
									</div>
									<span>
										{'cart.item.title'}
										loremsddcskdjcksjdkj.djfsvkjdfkjv
									</span>
								</td>
								<td>{'cart.item.category'}</td>
								<td>
									<span>230</span>
								</td>
								<td>
									<span style={{ fontWeight: '800' }}>
										{formatter.format('cart.item.price')}
									</span>
								</td>
								<td>
									<span style={{ fontWeight: '800' }}>
										{formatter.format('cart.item.price * cart.quantity')}
									</span>
									<DeleteIcon color='inherit' className={classes.button} />
								</td>
							</tr>
							<tr>
								<td className='cart-image'>
									<div>
										<img height='50' src={meat} alt={'alsckal'} />
									</div>
									<span>
										{'cart.item.title'}
										loremsddcskdjcksjdkj.djfsvkjdfkjv
									</span>
								</td>
								<td>{'cart.item.category'}</td>
								<td>
									<span>230</span>
								</td>
								<td>
									<span style={{ fontWeight: '800' }}>
										{formatter.format('cart.item.price')}
									</span>
								</td>
								<td>
									<span style={{ fontWeight: '800' }}>
										{formatter.format('cart.item.price * cart.quantity')}
									</span>

									<DeleteIcon color='inherit' className={classes.button} />
								</td>
							</tr>
							<tr>
								<td className='cart-image'>
									<div>
										<img height='50' src={meat} alt={'alsckal'} />
									</div>
									<span>
										{'cart.item.title'}
										loremsddcskdjcksjdkj.djfsvkjdfkjv
									</span>
								</td>
								<td>{'cart.item.category'}</td>
								<td>
									<span>230</span>
								</td>
								<td>
									<span style={{ fontWeight: '800' }}>
										{formatter.format('cart.item.price')}
									</span>
								</td>
								<td>
									<span style={{ fontWeight: '800' }}>
										{formatter.format('cart.item.price * cart.quantity')}
									</span>

									<DeleteIcon color='inherit' className={classes.button} />
								</td>
							</tr>
							{/* {cartDisplay.map((cart) => (
								<tr key={cart.item._id}>
									<td className='cart-image'>
										<img height='100' src={meat} alt={cart.item.title} />
										<span>{cart.item.title}</span>
									</td>
									<td>{cart.item.category}</td>
									<td>
										<div className='cart-btn'>
											<button>{cart.quantity}</button>
										</div>
									</td>
									<td>
										<span style={{ fontWeight: '800' }}>
											{formatter.format(cart.item.price)}
										</span>
									</td>
									<td>
										<span style={{ fontWeight: '800' }}>
											{formatter.format(cart.item.price * cart.quantity)}
										</span>
										<Button
											// onClick={() => removeItemQty(cart.item._id)}
											type='submit'
											className={classes.button}
											variant='contained'
											color='inherit'>
											Remove
										</Button>
									</td>
								</tr>
							))} */}
						</tbody>
					</table>
					{/* <div className='cart-table-total'>
						<h3>TOTAL:{formatter.format(totalAmount)} </h3>
					</div> */}
				</div>
			)}
		</>
	);
};

export default CartItem;
