import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Pending from './PendingShares';
import Processed from './ProccessedOrders';
// import Checkout from './Checkout';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && <div>{children}</div>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		margin: '2rem 1rem  '
	},
	AppBar: {
		background: '#008080'
	},
	Tab: {
		color: '#fff'
	}
}));

export default function FullWidthTabs() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		// console.log(value);
	};

	return (
		<div className={classes.root}>
			<AppBar className={classes.AppBar} position='static' color='inherit'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='inherit'
					className={classes.Tab}
					variant='fullWidth'
					aria-label='full width tabs example'>
					<Tab label='PENDING BULK SHARES' {...a11yProps(0)} />
					<Tab label='PROCESSED BULK SHARES' {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} dir={theme.direction}>
				<Pending />
			</TabPanel>
			<TabPanel value={value} index={1} dir={theme.direction}>
				<Processed />
			</TabPanel>
		</div>
	);
}
