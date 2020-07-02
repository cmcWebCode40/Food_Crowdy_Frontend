import React from 'react';
import { ProductsApi } from '../../api/Api';

const UseFetch = (url) => {
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');

	React.useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const res = await ProductsApi.get(url);
				setData(res.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		})();
	}, [url]);

	return {
		data,
		loading,
		error
	};
};

export default UseFetch;
