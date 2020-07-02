import React, { useEffect } from 'react';
// import { ProductsApi } from '../../api/Api';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import UseFetch from '../hooks/UseFetch';
import BackDrop from '../backdrop/Backdrop';
import Reviews from '../reviews/Reviews';
import Rating from '../product/rating/Rating';
import DialogTop from '../alertMessage/Dialog';
import ImgProduct from '../../images/meat.jpeg';
import { Link } from 'react-router-dom';

const formatter = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN'
});

const ProductDetails = ({ match }) => {
	const { data, loading } = UseFetch(`/${match.params.id}`);
	const [diaglog] = React.useState(false);
	useEffect(() => {}, [diaglog]);
	return (
		<div className='product-details'>
			{diaglog && <DialogTop />}
			{loading ? (
				<BackDrop load={true} />
			) : (
				<div className='product-details-items'>
					<div className='image'>
						<img height='300' width='300' src={ImgProduct} alt='carts items' />
					</div>
					<div className='desc'>
						<div className='title'>
							<h3>{data.title}</h3>
							<Rating />
						</div>
						<div className='desc-box'>
							<p className='desc-price'>{formatter.format(10000)} per 10 pcs</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur atque omnis necessitatibus iure debitis iste qui,
								aliquid tenetur accusantium quos architecto in quas ipsa aperiam
								facilis totam doloribus excepturi beatae? Eligendi officia
								praesentium illo porro perferendis asperiores molestiae saepe
								et?
							</p>
							{data.description}
							<div className='desc-people'>
								<p>
									Total Participants: <span>10</span>
								</p>
								<Divider />
								<p>
									Current Participants: <span>8</span>
								</p>
								<Divider />
							</div>
							<div className='btn-details'>
								<Link to={'/'}>
									<Button type='submit' variant='contained' color='primary'>
										Join Bulk Share
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
			<Reviews />
		</div>
	);
};

export default ProductDetails;
