import React from 'react';
import callCenter from '../../images/call-center-woman.svg';
import circulArrows from '../../images/circular-arrows-couple.svg';
import coniStack from '../../images/coins-stacks.svg';
import Verified from '../../images/verified-protection.svg';

const About = () => {
	return (
		<div className='services'>
			<div className='services-grid'>
				<div className='services-item'>
					<div className='item-list'>
						<img src={Verified} alt='verified protection' />
						<div className='item-desc'>
							<h3>SAFE SHOPPING</h3>
							<p>
								Your experience with us is highly secured <br />
								,shop with peace of mind
							</p>
						</div>
					</div>
				</div>
				<div className='services-item'>
					<div className='item-list'>
						<img src={coniStack} alt='coin stack' />
						<div className='item-desc'>
							<h3>VALUE FOR YOUR MONEY</h3>
							<p>
								we make sure you get <br /> the value of every penny you spend
							</p>
						</div>
					</div>
				</div>
				<div className='services-item'>
					<div className='item-list'>
						<img src={circulArrows} alt='return policy' />
						<div className='item-desc'>
							<h3> FLEXIBLE RETURN POLICY</h3>
							<p>
								if you don't like what you see <br /> no problem we've got you
								covered.
							</p>
						</div>
					</div>
				</div>
				<div className='services-item'>
					<div className='item-list'>
						<img src={callCenter} alt='customer services' />
						<div className='item-desc'>
							<h3>24/7 CUSTOMER SERVICE</h3>
							<p>We are always ready to hear from you.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
