import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default ({ next, previous, goToSlide, ...rest }) => {
	const {
		carouselState: { currentSlide }
	} = rest;
	return (
		<div className='carousel-button-group custom-arrow'>
			{' '}
			<button
				className={
					currentSlide === 0 ? 'disable slide-btn sbtn-1' : 'sbtn-1 slide-btn'
				}
				onClick={() => previous()}>
				<ArrowBackIosIcon />
			</button>
			<button className='slide-btn sbtn-2' onClick={() => next()}>
				<ArrowForwardIosIcon />
			</button>
		</div>
	);
};
