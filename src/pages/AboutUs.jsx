import React from 'react';
import technicalSupport from '../images/technical-support.svg';
import _100Percent from '../images/100percent.svg';
import buy from '../images/buy1.svg';
import AboutPage from '../images/about-page.svg';

const AboutUs = () => {
	return (
		<div className='about'>
			<div className='about-img'>
				<img src={AboutPage} alt='about food crowdy' />
			</div>
			<div className='about-desc'>
				<h3>ABOUT FOODCROWDY </h3>
				<div className='line line-primary'></div>
				<p>
					At FoodCrowdy, We connect people together to the share products
					excites us to do this!. <br />
					<br />
					FoodCrowdy.com is an online store that allows you to shop bulk items
					with your family and friends so you can enjoy deep discounts on the
					prices of food and daily needs, you will agree it’s a smarter way to
					shop. We are connecting farmers, manufacturers, <br />
					<br />
					wholesalers directly to you the consumer in an innovative way that
					everyone benefits. Shop and share your orders for your foodstuffs,{' '}
					<br />
					<br />
					groceries, meat, baby products, etc now via your social network. Tell
					your family and friends about us!
				</p>
			</div>
			<div className='about-values'>
				<h3>CORE VALUES</h3>
				<div className='line line-primary'></div>
				<div className='about-grid'>
					<div>
						<img src={_100Percent} alt='100% genuine' />
						<p>
							Access 100% Genuine Products <br /> from Local & International
							VendorsBuy
						</p>
					</div>
					<div>
						<img src={buy} alt='best prices' />
						<p>
							Buy Anything You want <br /> online at the Best Prices
						</p>
					</div>
					<div>
						<img src={technicalSupport} alt='customer services' />
						<p>
							Assisting Our Customers <br /> for the best Shopping Experience
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
