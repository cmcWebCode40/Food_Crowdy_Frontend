import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: '#008080'
	},
	list: {
		display: 'flex',
		justifyContent: 'center',
		// margin:'1rem auto',
		height: '3.7rem',
		'& li': {
			margin: '0rem 2.4rem ',
			padding: '.9rem 0 0 0 ',
			// borderBottom: '3px solid #FFCC2A',
			'& a': {
				color: '#fff',
				fontWeight: '700',
				lineHeight: '1.7',
				letterSpacing: '1px'
				// borderBottom: '3px solid #FFCC2A'
			},
			'&:hover': {
				borderBottom: '3px solid #FFCC2A'
				// margin:'1rem 0'
			}
		}
	}
}));

const active = {
	color: '#FFCC2A'
};

export default function NavTabs() {
	const classes = useStyles();
	// const [value, setValue] = React.useState(0);

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	return (
		<div className='appbar'>
			<div className={classes.root} style={{ background: '#008080' }}>
				<ul className={classes.list}>
					<li>
						<NavLink to='/' title='home'>
							{' '}
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/about-us' title='about us'>
							{' '}
							ABOUT{' '}
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='shop-now' title='shop now'>
							{' '}
							SHOP
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={active}
							to='/active/bulkshare'
							title='bulk buy'>
							{' '}
							BULK BUY
						</NavLink>
					</li>
					{/* <li>
						<NavLink activeStyle={active} to='/future' title='future buying'>
							{' '}
							FUTURE BUYING
						</NavLink>
					</li> */}
					<li>
						<NavLink activeStyle={active} to='/contact-us' title='contact-us'>
							{' '}
							CONTACT US
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
