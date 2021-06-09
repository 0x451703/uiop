import { configureStore } from '@reduxjs/toolkit';
import { loadskinReducer } from './reducers/loadskinReducer';

const loadskinStore = configureStore({
    reducer: {
        loadskinReducer: loadskinReducer
    }
})

export default loadskinStore;
