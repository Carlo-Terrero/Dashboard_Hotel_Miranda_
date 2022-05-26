// En la tienda agregamos los reducer de cada Slice
import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../slice/roomSlices';
import contactReducer from '../slice/contactSlice';
import userReducer from '../slice/userSlice';
import bookingReducer from '../slice/bookingSlice';

export default configureStore({
    reducer: {
        room: roomReducer,
        contact: contactReducer,
        user: userReducer,
        booking: bookingReducer,
    }
})