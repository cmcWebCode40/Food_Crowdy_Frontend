import React from 'react';
import Button from '@material-ui/core/Button';
import Users from '../Users';
import { Link } from 'react-router-dom';

const BulkShare = () => {
	return (
		<div className='user-account'>
			<Users bulkBuy={true} />
			<div className='user-account-grid'>
				<div className='orders'>
					<h3>
						<strong>BULK STATUS</strong>
					</h3>
					<p>No active bulk buy status</p>
					<small>
						You can start bulk buy and share the price at a lower rate with your
						friends
					</small>
					<div className='user-btn'>
						<Link to='/'>
							<Button type='submit' variant='contained' color='primary'>
								Bulk Buy
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BulkShare;
