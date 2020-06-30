import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		textAlign: 'center',
		margin: 'auto'
		// '& > * + *': {
		// 	marginTop: theme.spacing(2)
		// }
	}
}));

export default function CustomizedSnackbars({ message, action }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Alert severity={action}>{message}</Alert>
		</div>
	);
}
