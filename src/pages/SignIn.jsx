import React, { useEffect, useContext } from 'react';
import {
	// getOldUrl,
	clearUserOfflineDatas,
	getCartItems,
	getProductId
} from '../utils/localStorageItems';
import { userApi } from '../api/Api';
import { contextApi } from '../components/context/Context';
import { useHistory } from 'react-router-dom';
import { saveAuthToken, saveUserDetails } from '../utils/authToken';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import SignUp from './Signup';

const useStyles = makeStyles((theme) => ({
	loginbox: {
		padding: '2rem '
	},
	form: {
		'& > div': {
			margin: '2rem 0'
		}
	},
	button: {
		margin: '6rem 0'
	},
	checkedBtn: {
		display: 'flex',
		justifyContent: 'space-between',
		'& span': {
			color: theme.palette.primary
		}
	},
	signnup: {
		padding: '2rem ',
		borderLeft: '1px solid #ccc'
	},
	button2: {
		'& button': {
			fontWeight: '700'
		}
	}
}));

const SignIn = (props) => {
	const { location } = props;
	const history = useHistory();
	const classes = useStyles();
	const { setNotifications } = useContext(contextApi);
	const [values, setValues] = React.useState({
		email: '',
		password: ''
	});
	const [message, setMessage] = React.useState('');
	const [loading, setLoading] = React.useState('');

	const handleChange = (key, value) => {
		setValues({ ...values, [key]: value });
	};

	const handleLogin = async (e, userDetails) => {
		e.preventDefault();
		setLoading(!loading);
		const productId = getProductId();
		const cartItems = getCartItems();
		try {
			if (productId !== null) userDetails.productId = JSON.parse(productId);
			if (cartItems !== null) userDetails.cart = JSON.parse(cartItems);
			const res = await userApi.post('/signin', userDetails);
			console.log(userDetails);
			saveAuthToken(res.data.token);
			saveUserDetails(res.data.validUser);
			setNotifications(true);
			console.log(res.data);
			clearUserOfflineDatas();
			if (location && location.state && res.productId) {
				history.replace(`${location.state.pathname}/${res.productId}`);
			} else if (location && location.state) {
				history.replace(location.state.pathname);
			} else {
				history.replace('/');
			}
		} catch (error) {
			const { response } = error;
			console.log({ error });
			if (response === undefined) {
				setMessage(error.message);
			} else if (response.data) {
				setMessage(response.data.message);
			}
			setLoading(false);
		}
	};

	// console.log();

	useEffect(() => {}, [message]);

	return (
		<div className='login'>
			<h2>CREATE ACCOUNT OR LOGIN</h2>
			<div className={'login-grid'}>
				<div className={classes.loginbox}>
					<h3>ALREADY REGISTERED?</h3>
					<p>If you have an account with us, please log in.</p>
					<form
						className={classes.form}
						onSubmit={(e) => handleLogin(e, values)}>
						{message && <p className='notify'>{message}</p>}
						<div>
							<TextField
								required
								fullWidth
								id='email-user-login'
								label='E-mail'
								type='email'
								onChange={(e) => handleChange('email', e.target.value)}
							/>
						</div>
						<div>
							<FormControl fullWidth>
								<InputLabel htmlFor='standard-adornment-password-login'>
									Password
								</InputLabel>
								<Input
									required
									id='standard-adornment-password-login'
									type={values.showPassword ? 'text' : 'password'}
									value={values.password}
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
								LOGIN
							</Button>
						</div>
					</form>
				</div>
				<div className={classes.signnup}>
					<SignUp props={props} />
				</div>
			</div>
		</div>
	);
};

export default SignIn;
