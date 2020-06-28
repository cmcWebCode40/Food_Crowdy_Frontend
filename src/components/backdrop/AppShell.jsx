import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const data = [
	{
		src:
			'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
		title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
		channel: 'Don Diablo',
		views: '396 k views',
		createdAt: 'a week ago'
	},
	{
		src:
			'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
		title: 'Queen - Greatest Hits',
		channel: 'Queen Official',
		views: '40 M views',
		createdAt: '3 years ago'
	},
	{
		src:
			'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
		title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
		channel: 'Calvin Harris',
		views: '130 M views',
		createdAt: '10 months ago'
	},
	{
		src:
			'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
		title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
		channel: 'Calvin Harris',
		views: '130 M views',
		createdAt: '10 months ago'
	},
	{
		src:
			'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
		title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
		channel: 'Calvin Harris',
		views: '130 M views',
		createdAt: '10 months ago'
	},
	{
		src:
			'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
		title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
		channel: 'Calvin Harris',
		views: '130 M views',
		createdAt: '10 months ago'
	}
];

export function Media(props) {
	const { loading = true } = props;

	return (
		<Grid container  style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
			{(loading ? Array.from(new Array(3)) : data).map((item, index) => (
				<Box key={index} height={300} width={350} marginRight={5} my={1}>
					{item ? (
						<img
							style={{ width: 210, height: 118 }}
							alt={item.title}
							src={item.src}
						/>
					) : (
						<>

							<Skeleton variant='rect' width={400} height={200} />
						</>
					)}

					{item ? (
						<Box pr={2}>
							<Typography gutterBottom variant='body2'>
								{item.title}
							</Typography>
							<Typography
								display='block'
								variant='caption'
								color='textSecondary'>
								{item.channel}
							</Typography>
							<Typography variant='caption' color='textSecondary'>
								{`${item.views} • ${item.createdAt}`}
							</Typography>
						</Box>
					) : (
						<Box pt={1}>
							<Skeleton />
							<Skeleton width='90%' />
						</Box>
					)}
				</Box>
			))}
		</Grid>
	);
}

Media.propTypes = {
	loading: PropTypes.bool
};

// export default function YouTube() {
// 	return (
// 		<Box overflow='hidden'>
// 			<Media loading />
// 			<Media />
// 		</Box>
// 	);
// }
