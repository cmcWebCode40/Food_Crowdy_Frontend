import React from 'react';
import helpImg from '../images/undraw_faq_rjoy.svg';

const Help = () => {
	return (
		<div className='help'>
			<div className='help-title'>
				<h1>Frequently Asked Questions</h1>
			</div>
			<div className='help-img'>
				<p>
					Get all the answers to the most frequently asked questions (FAQs)
					regarding some of our popular categories which include electronics,
					mobile phones, computers, fashion, beauty products, home and
					kitchen,building and construction materials and a whole lot more from
					premium brands as well as managing your account, payment, vouchers and
					much, much more.
				</p>
				<img src={helpImg} height='300' alt='faqs' />
			</div>
			<div className='help-body'>
				<div className='help-body-card'>
					<h3>Can I buy in bulk?</h3>
					<p>
						For all your Corporate Procurement, Gift Vouchers and Consumer
						Promotion Activities, please contact us on 0708 063 5700/0809 460
						5555 or email us at help@konga.com or visit the Bulk Purchase Page
						to learn more.
					</p>
				</div>
				<div className='help-body-card'>
					<h3>Why do I see different prices for the same product?</h3>
					<p>
						Konga is your trusted online marketplace that supports Nigerian
						entrepreneurs and we have many different sellers competing for
						business. Therefore, you may see the same product offered by
						different sellers at different prices. We believe that by supporting
						these 'third-party' sellers, we can offer you a wider product
						selection, more choice, increased convenience, and better pricing.
					</p>
				</div>
				<div className='help-body-card'>
					<h3>
						Will all of the items in my order arrive in a single package??
					</h3>
					<p>
						If your order consists of items from more than one seller, your
						items will arrive separately. If your order consists of items from a
						single seller, your items may arrive together or separately. If your
						orders arrive separately, be rest assured that the remaining item(s)
						will be delivered shortly.
					</p>
				</div>
				<div className='help-body-card'>
					<h3>What is buyer protection?</h3>
					<p>
						We offer all our customers ultimate peace of mind. We have you
						covered 100% on every eligible purchase. Visit the Buyer Safety Page
						to learn more.
					</p>
				</div>
				<div className='help-body-card'>
					<h3>Who will deliver my order?</h3>
					<p>
						Your order may be delivered by KOS, by other courier companies, or
						by the seller or the seller's agents, depending on whether the item
						was sold by Konga or a third-party seller and on the delivery method
						chosen by a third-party seller. You may be called prior to or on the
						same day as delivery to see if you are available to receive your
						order..
					</p>
				</div>
			</div>
		</div>
	);
};

export default Help;
