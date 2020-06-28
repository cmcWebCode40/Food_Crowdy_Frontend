import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { contextApi } from '../../context/Context';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { getUserName } from '../../../utils/localStorageItems';
import { Link } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	paper: {
		margin: '2rem auto',
		zIndex: '4',
		padding: '.3rem .5rem ',
		background: '#fff'
	},
	btn: {
		width: 200,
		zinde: '2',
		'& span': {
			color: '#000',
			fontWeight: '600'
		}
	},
	link: {
		color: '#000'
	},
	icon: {
		margin: '-.3rem 0'
	},
	popper: {
		// background:'#fff'
		zIndex: '3'
	}
}));

const DesktopHeaderLinks = () => {
	const history = useHistory();
	const classes = useStyles();
	const { notifications, logoutUser } = useContext(contextApi);
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const userName = getUserName();
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};
	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	useEffect(() => {}, [notifications]);

	return (
		<div>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup='true'
					onClick={handleToggle}>
					<PersonOutlineIcon />
					{userName ? <strong>{userName}</strong> : <strong>LOGIN</strong>}
					{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
					className={classes.popper}>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === 'bottom' ? 'center top' : 'center bottom',
								background: '#fff'
							}}>
							<Paper className={classes.paper}>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id='menu-list-grow'
										onKeyDown={handleListKeyDown}>
										{/* <div>LOGIN</div> */}
										<MenuItem onClick={handleClose}>
											<Link title='login' to='/customer/account/login'>
												{userName ? (
													<Button
														className={classes.btn}
														type='submit'
														variant='contained'
														fullWidth
														onClick={(e) => logoutUser(e, history)}
														color='primary'>
														<span>LOGOUT</span>
													</Button>
												) : (
													<Button
														className={classes.btn}
														type='submit'
														variant='contained'
														fullWidth
														color='primary'>
														<span>LOGIN</span>
													</Button>
												)}
											</Link>
										</MenuItem>
										<MenuItem onClick={handleClose}>OR</MenuItem>
										<MenuItem onClick={handleClose}>
											{userName ? (
												<Link
													className={classes.link}
													to='/customer/account/profile/'>
													<PersonOutlineIcon className={classes.icon} /> My
													profile
												</Link>
											) : (
												<Link
													className={classes.link}
													to='/customer/account/login'>
													Create an Account
												</Link>
											)}
										</MenuItem>
										<MenuItem onClick={handleClose}>
											{userName ? (
												<Link
													className={classes.link}
													to='/customer/account/wallet'>
													<AccountBalanceWalletIcon className={classes.icon} />{' '}
													My Wallet
												</Link>
											) : (
												<Link
													className={classes.link}
													to='/customer/account/profile'>
													<PersonOutlineIcon className={classes.icon} /> Account
												</Link>
											)}
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
};

export default DesktopHeaderLinks;
