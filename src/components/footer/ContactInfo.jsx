import React from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	icon: {
		padding: '.3rem 0 0 0',
		margin: '0 0 -.2rem  0'
	}
}));

const ContactInfo = () => {
	const classes = useStyles();
	return (
		<div className='footercontact'>
			<ul>
				<li>
					<Link to='/' href='wwww.com'>
						<MailOutlineIcon className={classes.icon} />
						info@foodcrowdy.com
					</Link>
				</li>
				<li>
					<Link to='/' href='wwww.com'>
						<LocationOnIcon className={classes.icon} />
						No 4 Eliada Close, <br />
						Off Okporo Road Artillery <br />
						Port Harcourt, Rivers Ng
					</Link>
				</li>
				<li>
					<Link to='/' href='wwww.com'>
						<CallIcon className={classes.icon} />
						+234 8165084064
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ContactInfo;
