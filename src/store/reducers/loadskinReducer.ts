import { createSlice } from '@reduxjs/toolkit';

const loadskinSlice = createSlice({
    name: 'load',
    initialState: {
        allLoad: [
            {
                Jax: 4
            }
        ]
    },
    reducers: {
        fixLoad: (state, action) => {
            state.allLoad[0].Jax = action.payload;
        }
    }
})

export const loadskinReducer = loadskinSlice.reducer;
export const loadskinSelector = (state: { loadskinReducer: { allLoad: any; }; }) => state.loadskinReducer.allLoad;
export const fixLoad = loadskinSlice.actions.fixLoad;
