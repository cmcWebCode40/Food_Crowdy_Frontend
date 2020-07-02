import React from 'react';
// import Button from '@material-ui/core/Button';
import Users from '../Users';
// import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const FutureBuying = () => {
	// const res = await userApi.post('/signin/43t83948t43t34', userDetails);
	return (
		<div className='user-account'>
			<Users wallet={true} />
			<div className='user-account-grid'>
				<div className='wallets'>
					<div className='wallet '>
						<PersonOutlineIcon />
						<p>0</p>
						<h4>My Balance</h4>
						<span className='view1'></span>
					</div>
					<div className='wallet' >
						<PersonOutlineIcon />
						<p>0</p>
						<h4>My Balance</h4>
						<span className='view2'></span>
					</div>
					<div className='wallet '>
						<PersonOutlineIcon />
						<p>0</p>
						<h4>My Balance</h4>
						<span className='view3'></span>
					</div>
					<div className='wallet '>
						<PersonOutlineIcon />
						<p>0</p>
						<h4>My Balance</h4>
						<span className='view4'></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FutureBuying;
