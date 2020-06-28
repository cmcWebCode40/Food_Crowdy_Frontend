import React from 'react';
import { userApi } from '../../api/Api';

const UseFetch = (url) => {
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const token = JSON.parse(localStorage.getItem('_token'));
	// console.log(token);

	const getproducts = async () => {
		try {
			setLoading(true);
			const res = await userApi.get(url, {
				headers: {
					'content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			});
			setData(res.data);
			setLoading(false);
			// console.log(res);
		} catch (error) {
			setError(error);
			setLoading(false);
			// console.log(error);
		}
	};
	React.useEffect(() => {
		getproducts();
	}, []);

	return {
		data,
		loading,
		error
	};
};

export default UseFetch;
