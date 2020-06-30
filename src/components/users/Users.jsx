import React from 'react';
import { Link } from 'react-router-dom';
import { getUserName } from '../../utils/localStorageItems';

const Users = ({ profile, orders, bulkBuy, wallet }) => {
	const name = getUserName();
	return (
		<div className='user'>
			<h4> Hi, {name && name}</h4>
			<ul>
				<li className={wallet ? 'user-active' : ''}>
					<Link to='/customer/account/wallet' title='wallet'>
						My Wallet
					</Link>
				</li>
				<li className={profile ? 'user-active' : ''}>
					<Link to='/customer/account/profile' title='my account overview'>
						Account Overview
					</Link>
				</li>
				{/* <li className={orders ? 'user-active' : ''}>
					<Link to='/customer/account/myorders' title='my orders'>
						My Orders
					</Link>
				</li> */}
				<li className={bulkBuy ? 'user-active' : ''}>
					<Link
						to='/customer/account/mybulk-share-status'
						title='my bulk share status'>
						My Bulk Shares
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Users;
