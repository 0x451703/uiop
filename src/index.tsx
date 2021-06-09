import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import loadskinStore from './store/index';
import App from './App';

// import { store } from './app/store';
// 

ReactDOM.render(
	<Provider store={loadskinStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
