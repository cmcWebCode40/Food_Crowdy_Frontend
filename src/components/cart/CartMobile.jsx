import React from 'react';
import meat from '../../images/meat.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(() => ({
	button: {
		// background: 'red',
		color: 'red',
		fontWeight: '600',
		margin:'.6rem  0 -.5rem 0'
	}
}));


const formatter = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN'
});
const CartMobile = () => {
	const classes = useStyles();
	return (
		<div className='mobile-cart'>
			<div className='mobile-cart-grid'>
				<div className='block'>
					<img height='90' src={meat} alt='meat title' />
				</div>
				<div className='block2'>
					<h5>
						10 Bags of Rice MamaGoldGold10 Bags of Rice MamaGolGold10 Bags of
						Rice MamaGol10 Bags of Rice MamaGold
					</h5>
					<small>category</small>
					<p>
						Portion: <span>4</span>
					</p>
					<p>
						Unit Price: <span>{formatter.format(23000)}</span>
					</p>
					<p>
						Total Price : <span>{formatter.format(23000)}</span>
					</p>
				</div>
			</div>
			<div className='mobile-cart-bottom'>
				<span>
					{' '}
					<DeleteIcon color='inherit' className={classes.button}  /> Remove
				</span>
			</div>
		</div>
	);
};

export default CartMobile;
