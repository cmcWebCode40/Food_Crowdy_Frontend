import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { contextApi } from '../context/Context';

const PrivateRoute = ({ location, role, component: Component, ...rest }) => {
	const { getAuth } = useContext(contextApi);
	// const access = ['admikn', 'sales', 'new', 'superAdmin'];
	// // localStorage.setItem(
	// // 	'roles',
	// // 	JSON.stringify(['admin', 'sales', 'superAdmin'])
	// // );
	// const newArr = access.filter((admin) => (admin === role ? true : ''));

	// useEffect(() => {
	// 	// setGrantAccess(newArr);
	// 	// console.log(grantAccess);
	// }, [role, access]);
	// newArr[0]

	return (
		<Route
			{...rest}
			render={(props) =>
				getAuth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/customer/account/login',
							state: props.location
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
