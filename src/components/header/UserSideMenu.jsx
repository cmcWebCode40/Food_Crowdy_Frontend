import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
	root: {
		height: 216,
		flexGrow: 1,
		maxWidth: 400
	}
});

const USER_NAV = [
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
		name: 'Top Deals',
		path: '/active/bulkshare'
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

export default function UserMobileNav() {
	const classes = useStyles();
	return (
		<TreeView
			className={classes.root}
			defaultCollapseIcon={<ExpandMoreIcon />}
			defaultExpandIcon={<ChevronRightIcon />}
			multiSelect>
			<TreeItem nodeId='1' label='User Profile'>
				{USER_NAV.map((items) => (
					<Link to={items.path}>
						<TreeItem nodeId={items.id} label={items.name} />
					</Link>
				))}
			</TreeItem>
		</TreeView>
	);
}
