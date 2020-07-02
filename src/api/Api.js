import axios from 'axios';

export const BulkShareApi = axios.create({
	baseURL: 'https://m3.foodcrowdy.com/bulkshare',
	responseType: 'json'
});

export const ProductsApi = axios.create({
	baseURL: 'https://m5.foodcrowdy.com/products',
	responseType: 'json'
});

export const userApi = axios.create({
	baseURL: 'https://m6.foodcrowdy.com/users',
	responseType: 'json'
});

export const AdminApi = axios.create({
	baseURL: 'https://m1.foodcrowdy.com/admin',
	responseType: 'json'
});
