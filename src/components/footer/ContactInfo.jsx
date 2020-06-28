import React from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';

const ContactInfo = () => {
	return (
		<div className="footercontact">
			<ul>
				<li>
					<Link to='/' href='wwww.com'>
						<MailOutlineIcon />
						info@foodcrowdy.com
					</Link>
				</li>
				<li>
					<Link to='/' href='wwww.com'>
						<LocationOnIcon />
						St badman, no 4 area boys close,PH
					</Link>
				</li>
				<li>
					<Link to='/' href='wwww.com'>
						<CallIcon />
						+234 8165084064
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ContactInfo;
