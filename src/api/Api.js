import axios from 'axios';

// export default axios.create({
// 	baseURL: 'http://localhost:5000/',
// 	responseType: 'json'
// });

export const BulkShareApi = axios.create({
	baseURL: 'http://localhost:8001/bulkshare',
	responseType: 'json'
});

export const ProductsApi = axios.create({
	baseURL: 'http://localhost:5000/products',
	responseType: 'json'
});

export const userApi = axios.create({
	baseURL: 'http://localhost:6001/users',
	responseType: 'json'
});
export const AdminApi = axios.create({
	baseURL: 'http://localhost:9000/admin',
	responseType: 'json'
});

// 	// const createBulkShare = (async () => {
// 	// 	try {
// 	// 		const res = await userApi.get(
// 	// 			`/createbulkshare/checkout/${num}/5ee875d80e4ac31b44a2f9d7/?numberOfParticipants=${nop}&numberOfParts=${noprts}&totalAmountToBePaid=${totals}`
// 	// 		);
// 	// 		console.log(res.data);
// 	// 	} catch (error) {
// 	// 		console.log({ error });
// 	// 	}
// 	// })();
// 	async () => {
// 		// const data = {
// 		// 	totalParticipants: '30',
// 		// 	currentParticipants: '2'
// 		// };
// 		// const userId = JSON.parse(localStorage.getItem('_user'));
// 		try {
// 			const res = await BulkShareApi.get(`/join/5ef1d7ed74c0e820c4b4f84e`, {
// 				data
// 			});
// 			// console.log(res);
// 		} catch (error) {
// 			// console.log({ error });
// 		}
// 		// try {
// 		// 	const res = await userApi.post(
// 		// 		`/createbulkshare/checkout/${userId.id}/5ee875d80e4ac31b44a2f9d7`,
// 		// 		{ data }
// 		// 	);
// 		// 	console.log(res);
// 		// } catch (error) {
// 		// 	console.log({ error });
// 		// }
// 	}
// )();
(async () => {
	// const data = {
	// 	totalParticipants: '30',
	// 	currentParticipants: '2'
	// };
	// const userId = JSON.parse(localStorage.getItem('_user'));
	try {
		const res = await userApi.get(`/joinbulkshare/5ee875d80e4ac31b44a2f9d7`, {
			headers: {
				'content-Type': 'application/json'
				// Authorization: `Bearer ${JSON.parse(
				// 	localStorage.getItem('_token')
				// )}`
			}
		});
		// console.log(res);
	} catch (error) {
		// console.log({ error });
	}
})();
