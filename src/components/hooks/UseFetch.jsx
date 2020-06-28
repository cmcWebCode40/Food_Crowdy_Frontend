import React from 'react';
import { ProductsApi } from '../../api/Api';

const UseFetch = (url) => {
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const getproducts = async () => {
		try {
			setLoading(true);
			const res = await ProductsApi.get(url);
			setData(res.data);
			setLoading(false);
			// console.log(res);
		} catch (error) {
			setError(error);
			setLoading(false);
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
