// En la tienda agregamos los reducer de cada Slice
import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../slice/roomSlices';
import messageSlice from '../slice/messageSlice';
import userReducer from '../slice/userSlice';
import bookingReducer from '../slice/bookingSlice';

export default configureStore({
    reducer: {
        room: roomReducer,
        message: messageSlice,
        user: userReducer,
        booking: bookingReducer,
    }
})