import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Moment from 'react-moment';
import EventIcon from '@material-ui/icons/Event';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '42%',
		margin: '0 .1rem ',
		position: 'absolute',
		zIndex: '3'
	},
	list: {
		margin: '1rem .4rem ',
		border: '2px solid #ccc',
		borderRadius: '.4rem '
	},
	button: {
		fontWeight: '600',
		margin: '.6rem  0 -.5rem 0'
	},
	title: {
		margin: '1rem  0 0 0'
	}
}));

const ProcessingShares = () => {
	const classes = useStyles();
	return (
		<div>
			<Paper elevation={3} className={'classes.paper'}>
				<h3 className={classes.title}>(3) Processed BulkShares</h3>
				<div className={classes.list}>
					<div className='mobile-cart-grid'>
						<div className='block'>
							<img height='150' src={'meat'} alt='meat title' />
						</div>
						<div className='block2'>
							<h5>
								10 Bags of Rice MamaGoldGold10 Bags of Rice MamaGolGold10 Bags
								of Rice MamaGol10 Bags of Rice MamaGold
							</h5>
							<small>category</small>
							<p>
								Total Participants : <span>10</span>
							</p>
							<p>
								Current Participants : <span>10</span>
							</p>
							<p>
								Created at{' '}
								<span>
									{' '}
									<EventIcon className={classes.button} />{' '}
									<Moment format='YYYY-MM-DD'>2020-04-20T12:59-0500</Moment>
								</span>
							</p>
							<Chip label='Completed' />
						</div>
					</div>
					<div className='mobile-cart-bottom' style={{ color: 'green' }}>
						<CheckCircleOutlineIcon className={classes.button} />
						<Button variant='text' color='inherit'>
							Processing awaiting Delivery
						</Button>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default ProcessingShares;
