import React, { useContext, useEffect } from 'react';
import { contextApi } from '../context/Context';
import NavBar from './NavBar';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopNav from './desktop/DesktopTab';
import SideNav from '../sidenav/SideNav';
import DesktopNavHeader from './desktop/DesktopNavHeader';

const Header = () => {
	const { updateCart } = useContext(contextApi);
	useEffect(() => {
		// console.log(updateCart);
	}, [updateCart]);
	return (
		<div className='header'>
			<div className='top-message'>
				<span>
					<LiveHelpIcon color='primary' /> Online support 24/7
				</span>
				<span>
					<PhoneIphoneIcon color='primary' /> Tel +234 8165084064
				</span>
			</div>
			<DesktopNavHeader />
			<SideNav />
			<NavBar />
			<DesktopNav />
		</div>
	);
};

export default Header;
