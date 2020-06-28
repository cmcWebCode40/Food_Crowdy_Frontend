import React, { useContext, useEffect } from 'react';
import { contextApi } from '../context/Context';
import { useHistory } from 'react-router-dom';
import { getUserName } from '../../utils/localStorageItems';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	},
	close: {
		margin: '.5rem 2rem  0 2rem '
	},
	anchorTag: {
		color: '#008080'
		// border: '1px solid #ccc'
	},
	btn: {
		margin: '.4rem .8rem ',
		padding: '.4rem 1.5rem '
	}
});

const SIDE_NAV = [
	{
		id: 1,
		name: 'Home',
		path: '/'
	},
	{
		id: 2,
		name: 'About',
		path: '/about-us'
	},
	{
		id: 3,
		name: 'Shop Now',
		path: '/shop-now'
	},
	{
		id: 4,
		name: 'Bulk Buy',
		path: '/bulk-buy'
	},
	// {
	// 	id: 5,
	// 	name: 'Future Buying',
	// 	path: '/future-buying'
	// },
	{
		id: 7,
		name: 'Contact',
		path: '/contact-us'
	}
];

const SideNav = () => {
	const history = useHistory();
	const classes = useStyles();
	const user = getUserName();
	const { notifications, logoutUser } = useContext(contextApi);
	const [state, setState] = React.useState({
		right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ [anchor]: open });
	};
	useEffect(() => {}, [notifications]);
	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom'
			})}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<div className={classes.close}>
				<ChevronRightIcon />
			</div>
			<div className='profile-icon'>
				{user && (
					<>
						<img src='user' alt='user' /> <p>{user}</p>
						<Link to='/customer/account/profile'>Your Profile Dashboard</Link>
					</>
				)}
			</div>
			<List>
				{SIDE_NAV.map((text) => (
					<Link className={classes.anchorTag} key={text.id} to={text.path}>
						<ListItem button key={text}>
							<ListItemText primary={text.name} />
						</ListItem>
						<Divider />
					</Link>
				))}
				{/* dropdown menu for loggedIn users */}
				{user ? (
					<Button
						onClick={(e) => logoutUser(e, history)}
						variant='contained'
						className={classes.btn}
						color='primary'>
						<strong>LOGOUT</strong>
					</Button>
				) : (
					<Link to='customer/account/login'>
						<Button variant='contained' className={classes.btn} color='primary'>
							<strong>LOGIN</strong>
						</Button>
					</Link>
				)}
			</List>
			<Divider />
		</div>
	);

	return (
		<div className='menuicon'>
			<Button className='menuicon' onClick={toggleDrawer('right', true)}>
				<MenuIcon className='side-nav-menu' />
			</Button>
			<Drawer
				anchor={'right'}
				open={state['right']}
				onClose={toggleDrawer('right', false)}>
				{list('right')}
			</Drawer>
		</div>
	);
};

export default SideNav;
