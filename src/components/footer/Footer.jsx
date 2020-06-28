import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ContactInfo from './ContactInfo';
// https://flutterwave.com/_nuxt/videos/a5becc9.mp4
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		position: 'relative',
		overflow: 'auto',
		maxHeight: 300
	},
	listSection: {
		backgroundColor: 'inherit'
	},
	ul: {
		backgroundColor: 'inherit',
		padding: 0
	}
}));

const FOOTER_NAV = [
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
		path: '/products'
	},
	{
		id: 4,
		name: 'Bulk Buy',
		path: '/bulkbuy'
	},
	{
		id: 5,
		name: 'Future Buying',
		path: '/future-buying'
	},
	{
		id: 7,
		name: 'Contact',
		path: '/contact-us'
	}
];
const Footer = () => {
	const classes = useStyles();
	return (
		<footer className='footer'>
			<div className='footer-grid'>
				<div className='list-item'>
					<h5>Company</h5>
					<ul className={classes.ul}>
						{FOOTER_NAV.map((item) => (
							<li key={item.id}>
								<Link to={item.path}>{item.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='list-item'>
					<h5>Category</h5>
					<ul className={classes.ul}>
						{[
							'Fish & seafoood',
							'Friuts & Nuts',
							'Vegetables',
							'Condinments',
							'Cow,Goat,Chiken',
							'Foodstuffs',
						].map((item) => (
							<li key={item}>
								<Link to='/'>{item}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='list-item'>
					<h5>Get Our Updates</h5>
					<form className='footer-form' noValidate autoComplete='off'>
						<input type='text' placeholder='signup for our news update' />
						<Button type='submit' variant='contained' color='primary' fullWidth>
							<strong> Primary</strong>
						</Button>
					</form>
					<h5>Follow us on</h5>
					<Link to='/'>
						<FacebookIcon />
					</Link>
					<Link to='/'>
						<TwitterIcon />
					</Link>
					<Link to='/'>
						<YouTubeIcon />
					</Link>
					<Link to='/'>
						<InstagramIcon />
					</Link>
				</div>
				<div className='list-items'>
					<ContactInfo />
				</div>
			</div>
			<div className='footer-bottom'>
				<p> food crowdy &copy; 2020 || All right reversed</p>
			</div>
		</footer>
	);
};

export default Footer;
