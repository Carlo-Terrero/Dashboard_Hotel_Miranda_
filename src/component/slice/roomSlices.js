import { createSlice } from "@reduxjs/toolkit";
import { roomsData } from "../data/rooms";

export const roomSlice = createSlice({
    name: 'room',

    initialState: {
        roomList: roomsData,
    },

    reducers: {
        addRoom: (state) => {
            console.log('Room añadida');
        },

        deleteRoom: (state) => {
            console.log('delete room');
        },

        editRoom: (state) => {
            console.log('edit foto');
        },

        getOneElemen: (state) => {
            console.log(`select 1 foto`);
        },
        
    },

})


// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addRoom, deleteRoom, editRoom, getOneElemen } = roomSlice.actions;

// Exportamos los datos de todas la habitaciones
export const roomsListDate = (state) => state.room.roomList;

export default roomSlice.reducer;