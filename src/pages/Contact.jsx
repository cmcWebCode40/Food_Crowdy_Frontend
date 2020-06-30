import React, { useState, useEffect } from 'react';
import { AdminApi } from '../api/Api';
import { getUserId } from '../utils/localStorageItems';
import { Link } from 'react-router-dom';
import Alert from '../components/alertMessage/Notifications';
import Button from '@material-ui/core/Button';
import contactImg from '../images/contactus.svg';
import mail from '../images/mail 1.svg';
import phone from '../images/contact 1.svg';
import address from '../images/Vector.svg';

const compliantsTitle = [
	'I want to confirm my order',
	'I want to cancel my order',
	'I have a payment issue',
	'I to return my order',
	'I have some other request'
];
const Contact = () => {
	const [alert, setAlert] = useState(false);
	const [warning, setWarning] = useState(false);
	const [userDetails, setUserDetails] = useState({
		title: 'I have a payment issue'
	});
	const handleChange = (key, value) => {
		setUserDetails({ ...userDetails, [key]: value });
	};

	const handleComplaints = async (e) => {
		const userId = getUserId();
		e.preventDefault();
		if (userId === null) return setWarning(true);

		try {
			const res = await AdminApi.post(
				`/complaints/create/${userId}`,
				userDetails
			);
			console.log(res);
			setAlert(true);
			setUserDetails({
				title: 'I have a payment issue'
			});
		} catch (error) {
			console.log({ error });
		}
		console.log(userDetails);
	};

	useEffect(() => {}, [alert, warning]);
	return (
		<div className='contact'>
			<div className='contact-img'>
				<img src={contactImg} alt='contact us ' />
			</div>
			<div className='contact-content'>
				<h3>QUESTIONS OR COMMENTS, WE LOVE TO HEAR FROM YOU</h3>
				<div className='line'></div>
				<p>
					<strong>
						{' '}
						We are committed to give you a great shopping experience, from your
						orders to your doorstep delivery. <br /> We are here to answer any
						questions or comments, suggestions or just a hello, do reach out. We
						love to hear from you, we really do
					</strong>
				</p>
			</div>
			{/* <h4>
				<strong> WE LOVE TO HEAR FROM YO.</strong>
			</h4> */}
			<div className='contact-imgicon'>
				<div>
					<img src={phone} alt='phone call' />
					<p>
						<strong>Give Us a Call</strong>
					</p>
					<Link to='/' href='www.com'>
						+234 8165084064
					</Link>
				</div>
				<div>
					<img src={mail} alt='phone call' />
					<p>
						<strong>Write To Us</strong>
					</p>
					<Link to='/' href='www.com'>
						info@foodcrowdy.com.ng
					</Link>
				</div>
				<div>
					<img src={address} alt='phone call' />
					<p>
						<strong>Our Address</strong>
					</p>
					<address>artillery ph</address>
				</div>
			</div>
			<div className='message-us'>
				{alert && (
					<Alert
						action={'success'}
						message={
							'Thank you for contacting us , we will get back to you soon'
						}
					/>
				)}
				{warning && (
					<Alert
						action={'warning'}
						message={
							'Please you must  Logged in before you can send use a message'
						}
					/>
				)}
				<h3>
					<strong>GET IN TOUCH</strong>
				</h3>
				<form className='contact-form' onSubmit={handleComplaints}>
					<div>
						<input
							type='number'
							id='first-name'
							name='first-name'
							placeholder='Enter your  Order Id no (e.g 123456789) '
							onChange={(e) => handleChange('orderId', e.target.value)}
							required
						/>
					</div>
					<div>
						<input
							type='text'
							id='email-id'
							name='email-id'
							placeholder='E-mail'
							onChange={(e) => handleChange('email', e.target.value)}
							required
						/>
					</div>
					<div>
						<select
							name='title-id'
							id='title-id'
							// defaultValue={userDetails.title}
							onChange={(e) => handleChange('title', e.target.value)}>
							{compliantsTitle.map((title) => (
								<option key={title} value={title}>
									{title}
								</option>
							))}
						</select>
					</div>
					<div>
						<textarea
							name='address'
							id=''
							cols='45'
							rows='6'
							required
							onChange={(e) => handleChange('body', e.target.value)}
							placeholder='Your Message'></textarea>
					</div>
					<Button type='submit' variant='contained' color='primary'>
						CONTACT US
					</Button>
				</form>
			</div>
			|
		</div>
	);
};

export default Contact;
