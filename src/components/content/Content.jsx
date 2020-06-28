import React from 'react';
import Carousel1 from '../../images/Carousel.svg';
import Carousel2 from '../../images/Carousel2.svg';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// const useStyles = makeStyles((theme) => ({}));

function Content() {
	// const classes = useStyles();
	// const matches = useMediaQuery('(min-width:1000px)');
	return (
		<div className='content'>
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={80}
				totalSlides={3}
				isIntrinsicHeight={true}
				infinite={true}
				isPlaying={true}>
				<Slider>
					<Slide index={0}>
						{' '}
						<img
							// height='450'
							src={Carousel1}
							alt={'buy, share and save'}
							className='slide'
						/>
					</Slide>
					<Slide index={1}>
						{' '}
						<img
							// height='450'
							src={Carousel2}
							alt={'Welcome to food crowdy'}
							className='slide'
						/>
					</Slide>
					<Slide index={2}>
						{' '}
						<img
							// height='450'
							src={Carousel1}
							alt={'buy, share and save'}
							className='slide'
						/>
					</Slide>
				</Slider>
				<ButtonBack className='btn-move btn-slide1'>
				<ArrowBackIosIcon />
				</ButtonBack>
				<ButtonNext className=' btn-move btn-slide2'>
					<ArrowForwardIosIcon />
				</ButtonNext>
			</CarouselProvider>
		</div>
	);
}

export default Content;
