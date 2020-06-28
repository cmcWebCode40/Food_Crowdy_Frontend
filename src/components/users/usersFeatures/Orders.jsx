import React from 'react';
import Button from '@material-ui/core/Button';
// import user from '../../../images/user.svg';
import Users from '../Users';

const Orders = () => {
	return (
		<div className='user-account'>
			<Users orders={true} />
			<div className='user-account-grid'>
				<div className='orders'>
					<h3>
						<strong>USER ORDERS</strong>
					</h3>
					<p>No orders Found</p>
					<Button type='submit' variant='contained' color='primary'>
						Shop Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Orders;
