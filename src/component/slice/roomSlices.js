import { createSlice } from "@reduxjs/toolkit";
import { roomsData } from "../data/rooms";

export const roomSlice = createSlice({
    name: 'room',

    initialState: {
        roomList: roomsData,
    },

    reducers: {
        addRoom: (state, action) => {
            console.log('Room añadida');
        },

        deleteRoom: (state, action) => {
            console.log('delete room');
        },

        editRoom: (state, action) => {
            console.log('edit room');
        },

        //Cambiar nombre getOneRoon
        getOneElemen: (state, action) => {
            console.log(`select 1 room`);
        },
        
    },

})


// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addRoom, deleteRoom, editRoom, getOneElemen } = roomSlice.actions;

// Exportamos los datos de todas la habitaciones
export const roomsListDate = (state) => state.room.roomList;

export default roomSlice.reducer;