import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const years = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const Checkout = ({ match, history }) => {
	const [selectedValue, setSelectedValue] = React.useState('a');

	const handleChange = (event) => {
		event.preventDefault();
		let value = event.target.value;
		setSelectedValue(value);
		console.log(selectedValue);
	};

	useEffect(() => {}, []);

	return (
		<div className='checkout'>
			<div className='checkout-total'>
				<h4>ORDER SUMMARY</h4>
				<div className='checkout-title'>
					<p>TOTAL TO PAY</p>
					<p>N43,330.00</p>
				</div>
			</div>

			<div className='checkout-form'>
				<div className='checkout-method'>
					<form>
						<div className='input-fields'>
							<div>
								<label htmlFor="card-number-id'">
									Credit/Debit Card Number
								</label>
								<input
									type='number'
									id='card-number-id'
									placeholder='card number'
								/>
							</div>
							<div>
								<p>Expiration Date</p>
								<select onChange={handleChange} name='exp-day' id='exp-day'>
									{months.map((days) => (
										<option value={days} key={days}>
											{days}
										</option>
									))}
								</select>
								<select onChange={handleChange} name='exp-day' id='exp-day'>
									{years.map((days) => (
										<option value={days} key={days}>
											{days}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor='holders-name'>Card Holders Name</label>
								<input
									type='text'
									id='holders-name'
									placeholder='card holders name'
								/>
							</div>
							<div>
								<Button type='submit' variant='contained' color='primary'>
									PAY
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
