import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './context/AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		
			<AppProvider>
				<App />
			</AppProvider>
		
	</React.StrictMode>,
	document.getElementById('root')
);
