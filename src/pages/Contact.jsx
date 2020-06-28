import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import contactImg from '../images/contact-us (4).svg';
import mail from '../images/mail 1.svg';
import phone from '../images/contact 1.svg';
import address from '../images/Vector.svg';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-img'>
				<img  src={contactImg} alt='contact us ' />
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
					<Link to="/" href='www.com'>+234 8165084064</Link>
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
				<h3>
					<strong>GET IN TOUCH</strong>
				</h3>
				<form className='contact-form'>
					<div>
						<input
							type='text'
							id='first-name'
							name='first-name'
							placeholder='Your Name'
						/>
					</div>
					<div>
						<input
							type='text'
							id='email-id'
							name='email-id'
							placeholder='E-mail'
						/>
					</div>
					<div>
						<input
							type='text'
							id='phone-number-id'
							name='phone-number-id'
							placeholder='Your Subject'
						/>
					</div>
					<div>
						<textarea
							name='address'
							id=''
							cols='45'
							rows='6'
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
