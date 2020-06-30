import React, { useContext, useState, useEffect } from 'react';
import { contextApi } from '../context/Context';
import { ProductsApi } from '../../api/Api';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import UseFetch from '../hooks/UseFetch';
import BackDrop from '../backdrop/Backdrop';
import Reviews from '../reviews/Reviews';
import Rating from '../product/rating/Rating';
import DialogTop from '../alertMessage/Dialog';
import ImgProduct from '../../images/meat.jpeg';

const formatter = new Intl.NumberFormat('en-NG', {
	style: 'currency',
	currency: 'NGN'
});

const ProductDetails = ({ match }) => {
	const { data, loading } = UseFetch(`/${match.params.id}`);
	const [open, setOpen] = useState(false);
	const [noOfPrt, setNoOfPrt] = useState(0);
	const { addItemToCart } = useContext(contextApi);
	const [alert, setAlert] = useState(false);
	const [diaglog, setDialog] = useState(false);

	const handleReview = async (event, review, setReview) => {
		event.preventDefault();
		try {
			const res = await ProductsApi.post(`/details/review/${match.params.id}`, {
				body: {
					body: review
				}
			});
			console.log(review);
			console.log(res);
			setAlert(true);
			setReview();
		} catch (error) {}
	};

	const handleClickOpen = () => {
		setDialog(false);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = () => {
		setOpen(false);
		setDialog(true);
	};

	const AddToCart = (noOfPrt) => {
		addItemToCart(data._id, noOfPrt);
		handleSubmit();
		console.log(noOfPrt);
	};
	useEffect(() => {}, [alert]);
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
							<p className='desc-price'>
								{formatter.format(data.price)} per 50 pcs
							</p>
							<p>{data.category}</p>
							{data.description}
							<div className='btn-details'>
								<Button type='submit' variant='contained' color='primary'>
									Join Bulk Share
								</Button>
								<>
									<Button
										variant='contained'
										style={{ background: '#008080', color: '#fff' }}
										color='primary'
										onClick={handleClickOpen}>
										Add to Cart
									</Button>
									<Dialog
										open={open}
										onClose={handleClose}
										aria-labelledby='form-dialog-title'>
										<DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
										<DialogContent>
											<DialogContentText>
												You are about to partake in this bulk sharing this
												products with other buyers <br />
												<strong>
													Please choose number of portion you want
												</strong>
											</DialogContentText>
											<TextField
												autoFocus
												margin='dense'
												id='name'
												label='No of portion '
												type='number'
												fullWidth
												onClick={(e) => setNoOfPrt(e.target.value)}
											/>
										</DialogContent>
										<DialogActions>
											<Button
												onClick={handleClose}
												variant='contained'
												color='secondary'>
												Cancel
											</Button>
											<Button
												onClick={() => AddToCart(noOfPrt)}
												variant='contained'
												color='primary'>
												ADD TO Cart
											</Button>
										</DialogActions>
									</Dialog>
								</>
							</div>
						</div>
					</div>
				</div>
			)}
			<Reviews
				productId={match.params.id}
				alert={alert}
				handleReview={handleReview}
			/>
		</div>
	);
};

export default ProductDetails;
