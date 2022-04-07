import {createSlice} from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
    name: 'booking',

    initialState: {
        bookingList: {},
    },

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

        getOneBooking: (state, aaction) => {
            console.log('get one booking');
        },

    },

})

export const {addBooking, deleteBooking, editBooking, getOneBooking} = bookingSlice.actions;

export const bookingListDate = (state) => state.booking.bookingList;

export default bookingSlice.reducer;