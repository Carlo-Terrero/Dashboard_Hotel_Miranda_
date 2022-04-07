// En la tienda agregamos los reducer de cada Slice
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import roomReducer from '../slice/roomSlices';
import conciergeReducer from '../slice/consiergeSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        room: roomReducer,
        concierge: conciergeReducer,
    }
})