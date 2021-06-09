import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadskinSelector } from './store/reducers/loadskinReducer';
import { fixLoad } from './store/reducers/loadskinReducer';

function App() {
	const loadSkin = useSelector(loadskinSelector);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Skin Jax: {loadSkin.map((load: { Jax: any; }) => load.Jax)}</h1>
			<button onClick={() => {
				dispatch(fixLoad(25));
			}}>Click Me!</button>
		</>
	);
}
// <h1>Skin Jax: {loadskinStore.getState().loadskinReducer.allLoad.map(load => load.Jax)}</h1>
export default App;
