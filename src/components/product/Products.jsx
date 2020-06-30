import React, { useContext, useState } from 'react';
import { contextApi } from '../context/Context';
import UseFetch from '../hooks/UseFetch';
import { Media } from '../backdrop/AppShell';
import { Link } from 'react-router-dom';
import Message from '../alertMessage/Message';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Dialog from '../alertMessage/Dialog';
import Rating from './rating/Rating';
import meat from '../../images/meat.jpeg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { responsive } from '../../utils/MediaQuery';
import CustomArrows from './customarrows/CustomArrows';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: '1rem auto',
		position: 'relative'
	},
	media: {
		height: 140
	},
	price: {
		fontWeight: 900,
		margin: '0.4rem 0'
	},
	rate: {
		position: 'absolute',
		right: '0.7rem',
		zIndex: '2',
		top: '1.2rem',
		padding: '.5rem .7rem',
		background: '#ffd9c3',
		color: '#ff5e00',
		borderRadius: '.4rem',
		fontWeight: 900
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2
	},
	noLabel: {
		marginTop: theme.spacing(3)
	},
	btn: {
		color: '#000',
		fontWeight: '700'
	},
	load: {
		height: 300
	}
}));

const formatter = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN'
});
const Products = (props) => {
	const classes = useStyles();
	const { updateCart, addItemToCart } = useContext(contextApi);
	const [item, setItem] = useState(false);
	const { data, loading } = UseFetch('/all');

	React.useEffect(() => {}, [updateCart]);
	// if (updateCart) {
	// 	return <Message isOpened={true} />;
	// }
	return (
		<>
			{/* <Dialog onOpen={item} /> */}
			{/* <button>mmessage</button> */}
			<Message isOpened={item} />
			<div className='products'>
				<div className='products-header'>
					<h3>Top Selling Food Items</h3>
					<div className='all-btn2'>
						<Link to='/shop-now'>
							<Button
								variant='text'
								color='inherit'
								className={classes.button}
								endIcon={<NavigateNextIcon color='inherit' fontSize='large' />}>
								SEE ALL
							</Button>
						</Link>
					</div>
				</div>
				{loading ? (
					<div className='loader'>
						<Media />
					</div>
				) : (
					<div className='product-grid-display'>
						<Carousel
							arrows={false}
							customButtonGroup={<CustomArrows />}
							responsive={responsive}>
							{data.slice(0, 6).map((item) => (
								<div className='card' key={item._id}>
									<Link to={`/product-details/${item.title}/${item._id}`}>
										<span className='discount'>-25%</span>
										<div className='card-img'>
											<img src={meat} alt={item.title} />
										</div>
									</Link>
									<div className='card-body'>
										<h4>{item.title}</h4>
										<p>
											{item.description.split('').slice(0, 80).join('')} Lorem
											ipsum dolor sit amet consectetur, adipisicing elit. Harum
											tenetur ipsa voluptatem ipsam accusamus laudantium quos
										</p>
										<p className='card-price'>
											<strong>{formatter.format(item.price)}</strong>
										</p>
										<small>Vegetables</small>

										<div className='add-to-cart'>
											<Rating value={1} />
											<div
												className='add-to-cart-icon'
												title='add to cart'
												onClick={() => {
													addItemToCart(item._id);
													setItem(true);
												}}>
												<ShoppingCartIcon color='inherit' fontSize='large' />
											</div>
										</div>
										<div className='card-btn'>
											<Link to={`/product-details/${item.title}/${item._id}`}>
												<Button fullWidth color='inherit'>
													JOIN NOW
												</Button>
											</Link>
										</div>
									</div>
								</div>
							))}
						</Carousel>
					</div>
				)}
			</div>
		</>
	);
};

export default Products;
