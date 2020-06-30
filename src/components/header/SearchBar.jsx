import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import meat from '../../images/meat.jpeg';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: '#fff'
	},
	paper: {
		margin: '0 auto ',
		position: 'absolute',
		zIndex: '3'
	},
	list: {
		margin: '0 .4rem '
	},
	link: {
		textAlign: 'center',
		margin: '6rem 1rem ',
		backgroundColor: '#fff'
	},
	close: {
		height: '2rem',
		width: '2rem',
		backgroundColor: '#fff',
		boxShadow: ` 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
		0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
		0 8px 16px rgba(0, 0, 0, 0.11)`,
		textAlign: 'right',
		borderRadius: '50%',
		position: 'absolute',
		top: '0%',
		right: '0%',
		margin: '.5rem 1rem ',
		cursor: 'pointer'
	}
}));

export default function SearchBar({ breathe }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3} className={classes.paper} style={{ width: breathe }}>
				<h4>Search Results(3)</h4>
				<CloseIcon className={classes.close} />
				<List className={classes.ro0ot}>
					<ListItem>
						<ListItemAvatar className={classes.list}>
							<img src={meat} height='60' alt='meat' />
						</ListItemAvatar>
						<ListItemText primary='Photos' secondary='Jan 9, 2014' />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar className={classes.list}>
							<img src={meat} height='60' alt='meat' />
						</ListItemAvatar>
						<ListItemText primary='Photos' secondary='Jan 9, 2014' />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar className={classes.list}>
							<img src={meat} height='60' alt='meat' />
						</ListItemAvatar>
						<ListItemText primary='Photos' secondary='Jan 9, 2014' />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar className={classes.list}>
							<img src={meat} height='60' alt='meat' />
						</ListItemAvatar>
						<ListItemText primary='Photos' secondary='Jan 9, 2014' />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar className={classes.list}>
							<img src={meat} height='60' alt='meat' />
						</ListItemAvatar>
						<ListItemText primary='Photos' secondary='Jan 9, 2014' />
					</ListItem>
					<Divider />
				</List>{' '}
				<Link to='/' className={classes.link}>
					SEE ALL RESULT (3)
					{/* <Button variant='contained' color='inherit'>
						
					</Button> */}
				</Link>
			</Paper>
		</div>
	);
}
