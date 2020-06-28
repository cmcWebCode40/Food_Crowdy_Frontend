import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

const AddressForm = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className='shipment'>
			<h3>Welcome To Checkout </h3>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>EDIT YOUR ADDRESS</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{' '}
						<br />
						<strong>Enter your preferred Shipping Adress here</strong>
					</DialogContentText>
					<TextField
						id='standard-multiline-static'
						label='Enter your Address'
						multiline
						rows={4}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant='contained' color='default'>
						Cancel
					</Button>
					<Button onClick={handleClose} variant='contained' color='primary'>
						UPDATE
					</Button>
				</DialogActions>
			</Dialog>
			<div className='shipment-title'>
				<h5>YOUR ADDRESS</h5>
				<Button
					variant='contained'
					style={{ background: '#008080', color: '#fff' }}
					color='primary'
					onClick={handleClickOpen}>
					CHANGE ADDRESS
				</Button>
			</div>
			<div className='shipment-user'>
				<h6>Chinweike Michael</h6>
				<p>No 8 chigbu street</p>
				<p>Rivers - ABHONEMA</p>
				<p>+2348165084064</p>
			</div>
			<div className='shipment-cost'>
				<div className='cost-grid'>
					<p>Items Total</p>
					<p>N435,000</p>
				</div>
				<div className='cost-grid'>
					<p>Shipping Fees</p>
					<p>N4,000</p>
				</div>
				<div className='cost-grid total'>
					<p>Total</p>
					<p>N493,8498000</p>
				</div>
			</div>
			<div className='shipment-total'>
				<Link to="/checkout">
				<Button type='submit' variant='contained' fullWidth color='primary'>
					PROCEED TO PAY
				</Button>
				</Link>
			</div>
		</div>
	);
};
export default AddressForm;
