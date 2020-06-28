import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Arrow from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

export default function CustomizedSnackbars({ isOpened }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(isOpened);

	// const handleClick = () => {
	// 	setOpen(true);
	// };

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.root}>
			{/* <Button variant='outlined' onClick={handleClick}>
				Open success snackbar
			</Button> */}
			<Snackbar open={open}  onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Item succesfully Added to cart <br />
					<Link to='/cart' title='go to cart'>
						<Arrow /> <span>Click to see your cart</span>
					</Link>
				</Alert>
			</Snackbar>
			{/* <Alert severity='error'>This is an error message!</Alert>
			<Alert severity='waning'>This is a warning message!</Alert>
			<Alert severity='info'>This is an information message!</Alert> */}
		</div>
	);
}
