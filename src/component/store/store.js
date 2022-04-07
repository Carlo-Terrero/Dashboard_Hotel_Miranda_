// En la tienda agregamos los reducer de cada Slice
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import roomReducer from '../slice/roomSlices';
import conciergeReducer from '../slice/consiergeSlice';
import userSlice from '../slice/userSlice';
import bookingSlice from '../slice/bookingSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        room: roomReducer,
        concierge: conciergeReducer,
        user: userSlice,
        booking: bookingSlice,
    }
})