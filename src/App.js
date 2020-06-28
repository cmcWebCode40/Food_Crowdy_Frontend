import React from 'react';
import Routes from './routes/Routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './sass/main.scss';
import { useHistory } from 'react-router-dom';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#FFCC2A'
		},
		// primary: {
		// 	main: '#008080'
		// },
		secondary: {
			main: '#ffffff'
		}
		// secondary: {
		// 	main: '#04ff57',
		// },
	},
	typography: {
		fontFamily: ['Arial, Helvetica, sans-serif'].join(',')
	}
});

function App() {
	const history = useHistory();
	return (
		<ThemeProvider theme={theme}>
			<Routes history={history} />
		</ThemeProvider>
	);
}

export default App;
