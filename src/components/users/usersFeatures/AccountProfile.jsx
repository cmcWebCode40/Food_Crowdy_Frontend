import React from 'react';
import Button from '@material-ui/core/Button';
import user from '../../../images/user.svg';
import Users from '../Users';

const AccountProfile = (props) => {
	// console.log(window.location);

	return (
		<div className='user-account'>
			<Users profile={true} michael={'sajxkajsxkjs'} />
			<div className='user-account-grid'>
				<div className='user-account-img'>
					<img src={user} height='100' alt='chinweike michael' />
					<div className='img-file'>
						<input type='file' />
						<br />
						<small>
							Max file size is 1MB, Minimum dimension: 270x210 And Suitable
							files are .jpg & .png
						</small>
					</div>
				</div>
				<form className='user-form'>
					<div>
						<label htmlFor='first-name'>First Name</label>
						<input type='text' id='first-name' name='first-name' />
					</div>
					<div>
						<label htmlFor='last-name'>Last Name</label>
						<input type='text' id='last-name' name='last-name' />
					</div>
					<div>
						<label htmlFor='email-id'>Email</label>
						<input type='text' id='email-id' name='email-id' />
					</div>
					<div>
						<label htmlFor='phone-number-id'>Phone Number</label>
						<input type='text' id='phone-number-id' name='phone-number-id' />
					</div>
					<div>
						<label htmlFor='address'>Address</label>
						<textarea name='address' id='' cols='45' rows='6'></textarea>
					</div>
					<div>
						<Button type='submit' variant='contained' color='primary'>
							Register
						</Button>
						
					</div>
				</form>
			</div>
		</div>
	);
};

export default AccountProfile;
