import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to='/' title='food crowdy'>
			<div className='logo'>
				<img src={logo} alt='food crowdy' />
			</div>
		</Link>
	);
};

export default Logo;
