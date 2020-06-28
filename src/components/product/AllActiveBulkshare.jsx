import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import meat from '../../images/meat.jpeg';
import Button from '@material-ui/core/Button';
import Rating from './rating/Rating';
import Paginator from 'react-hooks-paginator';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const formatter = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN'
});

const AllProducts = ({ state }) => {
	const pageLimit = 3;
	const [offset, setOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [currentData, setCurrentData] = useState([]);
	useEffect(() => {
		setCurrentData(state.slice(offset, offset + pageLimit));
	}, [offset, state]);

	return (
		<div className='shop-title'>
			<h3>All Products </h3>
			<div className='items-card'>
				{currentData.map((item) => (
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
								{item.description.split('').slice(0, 80).join('')} Lorem ipsum
								dolor sit amet consectetur, adipisicing elit. Harum tenetur ipsa
								voluptatem ipsam accusamus laudantium quos
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
										// addItemToCart(item._id);
										// setItem(true);
									}}>
									<ShoppingCartIcon color='inherit' fontSize='large' />
								</div>
							</div>
							<div className='card-btn'>
								<Link
									href='#'
									to={`/product-details/${item.title}/${item._id}`}>
									<Button fullWidth color='inherit'>
										JOIN NOW
									</Button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div>
				<Paginator
					totalRecords={state.length} //
					pageLimit={pageLimit}
					pageNeighbours={2}
					setOffset={setOffset}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					pageActiveClass={'active-btn'}
					pagePrevClass={'active-btn'}
					// pageLinkClass={'active-btn'}
				/>
			</div>
		</div>
	);
};

export default AllProducts;
