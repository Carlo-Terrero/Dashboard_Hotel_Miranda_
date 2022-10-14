import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {REACT_APP_LINK_HTTP} from '../../env';

const token = localStorage.getItem('Token')

const headers = {headers: {'Authorization': `Bearer  ${token}`} }

const initialState ={
    bookingList: [],
    status: 'idle',
    //error: null
}

export const getBookings = createAsyncThunk('getBookings/Get', async () =>{
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/bookings`,
        headers,
    );
    return response.data.booking;
});

export const getOneBooking = createAsyncThunk('oneBookings/Get', async (id) => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/bookings/${id}`,
        headers,
    );
    return [response.data.booking];
})

export const bookingSlice = createSlice({
    name: 'booking',

    initialState,

    reducers: {
        addBooking: (state, action) => {
            console.log('add booking');
        },

        deleteBooking: (state, action) => {
            console.log('delete Booking');
        },

        editBooking: (state, action) => {
            console.log('edit booking');
        },

    },
    extraReducers: (builder) =>{
        builder
            .addCase(getBookings.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.status = 'success'                
                state.bookingList = action.payload
            })
            .addCase(getBookings.rejected, (state, action) => {
                state.status = 'failed'                
            })

            .addCase(getOneBooking.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getOneBooking.fulfilled, (state, action) => {
                state.status = 'success'                
                state.bookingList = action.payload
            })
            .addCase(getOneBooking.rejected, (state, action) => {
                state.status = 'failed'                
            })


    }

});

export const {addBooking, deleteBooking, editBooking} = bookingSlice.actions;

export const bookingListDate = (state) => state.booking.bookingList;

export default bookingSlice.reducer;