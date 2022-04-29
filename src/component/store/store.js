// En la tienda agregamos los reducer de cada Slice
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import roomReducer from '../slice/roomSlices';
import pruebaReducer from '../slice/pruebaSinUso';
import userReducer from '../slice/userSlice';
import bookingReducer from '../slice/bookingSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        room: roomReducer,
        pruebaSinUso: pruebaReducer,
        user: userReducer,
        booking: bookingReducer,
        

    }
})