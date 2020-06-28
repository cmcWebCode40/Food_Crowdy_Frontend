import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from '../components/backdrop/Loader';
/**
 * *static components****
 */
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Error404 from '../pages/Error404';

/**
 *  ?? Food Crowdy Landing Page routes
 */
const Home = lazy(() => import('../pages/Home'));
const ContactUs = lazy(() => import('../pages/Contact'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Help = lazy(() => import('../pages/Help'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Cart = lazy(() => import('../components/cart/Cart'));
const CartVerifyContent = lazy(() => import('../components/checkout/addressForm'));
const ProductDetails = lazy(() =>
	import('../components/product/ProductDetails')
);
const AllActiveBulkshare = lazy(() =>
	import('../components/category/BulkBuySearch')
);
const ShopNow = lazy(() => import('../components/category/AllProduct'));

/**
 * ? User Private Routes
 */
const PrivateRoute = lazy(() =>
	import('../components/privateroute/PrivateRoute')
);
const UsersView = lazy(() => import('../pages/UsersView'));
const UserAcountDetails = lazy(() =>
	import('../components/users/usersFeatures/AccountProfile')
);
const UserWallet = lazy(() =>
	import('../components/users/usersFeatures/Wallet')
);
const UserOrders = lazy(() =>
	import('../components/users/usersFeatures/Orders')
);
const UserBulkShareStatus = lazy(() =>
	import('../components/users/usersFeatures/BulkShare')
);

const Checkout = lazy(() => import('../components/checkout/CheckoutPayment'));

const Layouts = () => {
	return (
		<Router>
			<Header />
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route exact path='/contact-us' component={ContactUs} />
					<Route exact path='/about-us' component={AboutUs} />
					<Route exact path='/help/FAQS' component={Help} />
					<Route exact path='/customer/account/login' component={SignIn} />
					<Route exact path='/customer/account/' component={UsersView} />
					<Route
						exact
						path='/product-details/:name/:id'
						component={ProductDetails}
					/>
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/checkout/verify_contents' component={CartVerifyContent} />
					<Route
						exact
						path='/active/bulkshare'
						component={AllActiveBulkshare}
					/>
					<Route exact path='/shop-now' component={ShopNow} />

					<PrivateRoute
						exact
						path='/customer/account/profile'
						component={UserAcountDetails}
						role='admin'
					/>
					<PrivateRoute
						exact
						path='/customer/account/myorders'
						component={UserOrders}
					/>
					<PrivateRoute
						exact
						path='/customer/account/mybulk-share-status'
						component={UserBulkShareStatus}
					/>
					<PrivateRoute
						exact
						path='/customer/account/wallet'
						component={UserWallet}
					/>
					<PrivateRoute
						exact
						path='/checkout'
						role='superAdmin'
						component={Checkout}
					/>
					<Route exact path='/' component={Home} />
					<Route exact component={Error404} />
				</Switch>
			</Suspense>
			<Footer />
		</Router>
	);
};

export default Layouts;
