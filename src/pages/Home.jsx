import React from 'react';
import Content from '../components/content/Content';
import Product from '../components/product/Products';
import About from '../components/content/About';
import Mission from '../components/content/Mission';
import Category from '../components/content/Category';

import ActiveBulkShare from '../components/product/ActiveBulkShare';
// import DemoProduct from '../components/product/DemoProduct';

const Home = (props) => {
	return (
		<div className='home'>
			<Content />
			<Category />
			<Mission />
			{/* <DemoProduct /> */}
			<Product data={props} />
			<ActiveBulkShare />
			<About />
		</div>
	);
};

export default Home;
