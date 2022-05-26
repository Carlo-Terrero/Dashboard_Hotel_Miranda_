import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    roomList: [],
    status: 'idk',
    //error: null
}

export const getRooms = createAsyncThunk('get/roms', async () =>{
    const response = await axios.get('http://localhost:3001/rooms')
    return response.data.rooms;
});

export const roomSlice = createSlice({
    name: 'room',

    initialState,

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

    extraReducers: (builder) => {
        builder
            .addCase(getRooms.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getRooms.fulfilled, (state, action) => {
                state.status = 'success'                
                state.roomList = action.payload
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.status = 'failed'                
            })
            /* .addCase(addNewUsers.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            }) */
    },

})


// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addRoom, deleteRoom, editRoom, getOneElemen } = roomSlice.actions;

// Exportamos los datos de todas la habitaciones
export const roomsListDate = (state) => state.room.roomList;

// Asi exportamos 1 elemento con el id deseado
export const getOnetoom = (state, id) => state.room.roomList.find(room => room.id === id);

export default roomSlice.reducer;