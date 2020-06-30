import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Moment from 'react-moment';
import EventIcon from '@material-ui/icons/Event';

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
  title:{
    margin:'1rem  0 0 0'
  }
}));

const PendingShares = () => {
	const classes = useStyles();
	return (
		<div
		>
			<Paper elevation={3} className={'classes.paper'}>
				<h3 className={classes.title}>(3) Pending BulkShare</h3>
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
								Current Participants : <span>5</span>
							</p>
							<p>
								Created at{' '}
								<span>
									{' '}
									<EventIcon className={classes.button} />{' '}
									<Moment format='YYYY-MM-DD'>2020-04-19T12:59-0500</Moment>
								</span>
							</p>
							<p>
								Expired at{' '}
								<span>
									{' '}
									<EventIcon className={classes.button} />{' '}
									<Moment format='YYYY-MM-DD'>2020-04-19T12:59-0500</Moment>
								</span>
							</p>
						</div>
					</div>
					<div className='mobile-cart-bottom'>
						<Button variant='contained' color='primary'>
							Reguest For Date Extension
						</Button>
					</div>
				</div>
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
								Current Participants : <span>5</span>
							</p>
							<p>
								Created at{' '}
								<span>
									{' '}
									<EventIcon />{' '}
									<Moment format='YYYY-MM-DD'>2020-04-19T12:59-0500</Moment>
								</span>
							</p>
							<p>
								Expired at{' '}
								<span>
									{' '}
									<EventIcon />{' '}
									<Moment format='YYYY-MM-DD'>2020-04-19T12:59-0500</Moment>
								</span>
							</p>
						</div>
					</div>
					<div className='mobile-cart-bottom'>
						<Button variant='contained' color='primary'>
							Reguest For Date Extension
						</Button>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default PendingShares;
