import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userApi } from '../api/Api';
import { contextApi } from '../components/context/Context';
import {
	getBulkBuyCartItems,
	clearUserOfflineDatas,
	// getOldUrl,
	getCartItems,
	getProductId
} from '../utils/localStorageItems';
import { saveAuthToken, saveUserDetails } from '../utils/authToken';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles(() => ({
	form: {
		width: '100%',
		'& label': {},
		'& > div': {
			margin: '1rem 0'
		}
	},
	button: {
		margin: '6rem 0'
	},
	signnup: {},
	button2: {
		'& button': {
			fontWeight: '700'
		}
	}
}));

const SignUp = ({ props }) => {
	const { location } = props;

	const history = useHistory();
	const classes = useStyles();
	const { setNotifications } = useContext(contextApi);
	const [message, setMessage] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [values, setValues] = React.useState({
		name: '',
		email: '',
		password: '',
		phoneNumber: ''
	});

	const handleChange = (key, value) => {
		setValues({ ...values, [key]: value });
	};

	/***
	 * !Data for registration
	 *
	 ***/
	const handleSubmit = async (event, userDetails) => {
		event.preventDefault();
		setLoading(!loading);
		const productId = getProductId();
		const cartItems = getCartItems();
		const bulkBuyCartItems = getBulkBuyCartItems();
		try {
			if (productId !== null) userDetails.productId = JSON.parse(productId);
			if (cartItems !== null) userDetails.cart = JSON.parse(cartItems);
			if (bulkBuyCartItems !== null)
				userDetails.bulkCart = JSON.parse(bulkBuyCartItems);
			const res = await userApi.post('/signup', userDetails);
			saveAuthToken(res.data.token);
			saveUserDetails(res.data.newUser);
			setNotifications(true);
			clearUserOfflineDatas();
			clearUserOfflineDatas();
			if (location && location.state && res.productId) {
				history.replace(`${location.state.pathname}/${res.productId}`);
			} else if (location && location.state) {
				history.replace(location.state.pathname);
			} else {
				history.replace('/');
			}
			setLoading(false);
		} catch (error) {
			const { response } = error;
			if (response === undefined) {
				setMessage(error.message);
			} else {
				setMessage(response.data.message);
			}
			setLoading(false);
		}
	};

	useEffect(() => {}, [message]);

	return (
		<>
			<h3>NEW HERE?</h3>
			<p>If you have an account with us, please log in.</p>
			<form className={classes.form} onSubmit={(e) => handleSubmit(e, values)}>
				{message && <p className='notify'>{message}</p>}
				<div>
					<TextField
						required
						fullWidth
						id='firstName'
						label='First Name'
						type='text'
						onChange={(e) => handleChange('name', e.target.value)}
					/>
				</div>
				<div>
					<TextField
						required
						fullWidth
						id='email-id'
						label='E-mail'
						type='email'
						onChange={(e) => handleChange('email', e.target.value)}
					/>
				</div>
				<div>
					( +234){' '}
					<TextField
						required
						fullWidth
						id='phone-id'
						label='Phone Number'
						type='number'
						onChange={(e) => handleChange('phoneNumber', e.target.value)}
					/>
				</div>
				<div>
					<FormControl fullWidth>
						<InputLabel htmlFor='standard-adornment-password'>
							Password
						</InputLabel>
						<Input
							required
							id='standard-adornment-password'
							type={'password'}
							fullWidth
							onChange={(e) => handleChange('password', e.target.value)}
						/>
					</FormControl>
				</div>
				<div className={classes.button2}>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						disabled={loading ? true : false}
						startIcon={<MailIcon className={classes.icon} />}>
						Register
					</Button>
				</div>
			</form>
		</>
	);
};

export default SignUp;
