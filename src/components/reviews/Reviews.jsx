import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

const Reviews = () => {
	const [value] = React.useState(0);
	const [messageBox, setMessageBox] = useState(false);
	const displayCommentBox = () => setMessageBox(!messageBox);

	return (
		<div className='review'>
			<div className='review-title'>
				<h3>
					<strong>REVIEWS</strong>
				</h3>
				<Button
					onClick={displayCommentBox}
					type='submit'
					variant='contained'
					color='primary'>
					<strong> WRITE A REVIEW</strong>
				</Button>
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
						O{' '}
						<Rating
							name='simple-controlled'
							value={value}
							// onChange={(event, newValue) => {
							// 	setValue(newValue);
							// }}
						/>
					</p>
				</div>
			</div>
			<div className='review-comments'>
				<h5>O OF REVIEWS</h5>
				<p>No reviews</p>
			</div>
			{messageBox ? (
				<div className='comment-message'>
					<form onSubmit={()=>console.log('cdscsd')
					}>
						<textarea
							name='comment-id'
							cols='30'
							rows='10'
							placeholder='write your review on this product'></textarea>
						<div>
							<Button type='submit' variant='contained' color='primary'>
								<strong> WRITE A REVIEW</strong>
							</Button>
						</div>
					</form>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Reviews;
