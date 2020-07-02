import React, { useState, useEffect } from 'react';
import { ProductsApi } from '../../api/Api';
import { getUserId } from '../../utils/localStorageItems';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Notify from '../alertMessage/Notifications';

const Reviews = ({ productId, handleReview, alert }) => {
	const [value] = React.useState(0);
	const [messageBox, setMessageBox] = useState(false);
	const [review, setReview] = useState('');
	const [showBtn, setShowBtn] = useState(false);
	const displayCommentBox = () => setMessageBox(!messageBox);
	const checkIfUserHasBoughtProduct = async (userId) => {
		try {
			const res = await ProductsApi.get(
				`/details/${productId}?userId=${userId}`
			);
			if (res.data.hasBought === true) {
				setShowBtn(true);
			}
		} catch (error) {
			// console.log({ error });
			// setMessageBox(!me)
			setShowBtn(true);
			// console.log(userId);
		}
	};

	useEffect(() => {
		const userId = getUserId();
		if (userId !== null) {
			checkIfUserHasBoughtProduct(userId);
		}
	});

	return (
		<div className='review'>
			<div className='review-title'>
				<h3>
					<strong>REVIEWS</strong>
				</h3>
				{showBtn && (
					<Button
						onClick={displayCommentBox}
						type='submit'
						variant='contained'
						color='primary'>
						<strong> WRITE A REVIEW</strong>
					</Button>
				)}
			</div>
			<div className='review-box'>
				<div className='rating'>
					<span>5STAR</span>
					<span className='rating-bar'></span>
					<span>0</span>
				</div>
				<div className='graph'>
					<h4>
						<strong>OVER RATING</strong>
					</h4>
					<p>
						O <Rating name='simple-controlled' value={value} />
					</p>
				</div>
			</div>
			<div className='review-comments'>
				<h5>O OF REVIEWS</h5>
				<p>No reviews</p>
			</div>
			{messageBox ? (
				<>
					{alert && (
						<Notify message='review successfully sent' action={'success'} />
					)}
					<div className='comment-message'>
						<form onSubmit={(e) => handleReview(e, review, displayCommentBox)}>
							<textarea
								name='comment-id'
								value={review}
								cols='30'
								rows='10'
								required
								onChange={(e) => setReview(e.target.value)}
								placeholder='write your review on this product'></textarea>
							<div>
								<Button type='submit' variant='contained' color='primary'>
									<strong> WRITE A REVIEW</strong>
								</Button>
							</div>
						</form>
					</div>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default Reviews;
