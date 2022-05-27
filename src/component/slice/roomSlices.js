import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import {REACT_APP_LINK_HTTP} from '../../env';

const initialState ={
    roomList: [],
    status: 'idk',
    //error: null
}

// solo falta, actualizar y que al liminar una room desaparezca de la lista
export const getRooms = createAsyncThunk('get/rooms', async () => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/rooms`)
    return response.data.rooms;
});

export const getOneRoom = createAsyncThunk('getOne/room', async (id) => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/rooms/${id}`)
    return [response.data.room];
});

export const postNewRoom = createAsyncThunk('postRoom/room', async (obj) => {
    const response = await axios.post(`${REACT_APP_LINK_HTTP}/rooms`, obj)
    return response.data.room;
})

export const deleteOneRoom = createAsyncThunk('deleteRoom/room', async (id) => {
    const response = await axios.delete(`${REACT_APP_LINK_HTTP}/rooms/${id}`)
    return response.data.room;
})


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
            
            .addCase(getOneRoom.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getOneRoom.fulfilled, (state, action) => {
                state.status = 'success'
                state.roomList = action.payload
            })
            .addCase(getOneRoom.rejected, (state, action) => {
                state.status = 'loading'
            })

            .addCase(postNewRoom.fulfilled, (state, action) => {
                state.status = 'success'
                state.roomList.push(action.payload)
            })

            .addCase(deleteOneRoom.fulfilled, (state, action) => {
                state.status = 'success'
                //state.roomList.delete(action.payload)                
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
//export const getOneRoom = (state, _id) => state.room.roomList.find(room => room._id === _id);

export default roomSlice.reducer;