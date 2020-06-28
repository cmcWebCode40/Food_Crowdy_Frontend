import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import error from '../images/error.svg';

const Error404 = () => {
	return (
		<div className='error'>
			<div>
				<img src={error} alt='page not found ' />
			</div>
			<div>
				<h1>Page not found</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quod
					
				</p>
				<Link to='/'>
					<Button variant='contained' color='primary'>
						GO To Home Page
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Error404;
