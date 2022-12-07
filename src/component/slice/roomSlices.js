import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import {REACT_APP_LINK_HTTP} from '../../env';

const token = localStorage.getItem('Token');

const headers = {headers: 
    {'Authorization': `Bearer  ${token}`}
};

const initialState ={
    roomList: [],
    status: 'idle',
    //error: null
};

// solo falta, actualizar y que al liminar una room desaparezca de la lista
export const getRooms = createAsyncThunk('get/rooms', async () => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/rooms`, headers )
    
    return response.data.rooms;
});

export const getOneRoom = createAsyncThunk('getOne/room', async (id) => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/rooms/${id}`, headers )
    return [response.data.room];
});

export const postNewRoom = createAsyncThunk('postRoom/room', async (obj) => {
    const response = await axios.post(`${REACT_APP_LINK_HTTP}/rooms`, obj, headers)
    return response.data.room;
})

export const deleteOneRoom = createAsyncThunk('deleteRoom/room', async (id) => {
    const response = await axios.delete(`${REACT_APP_LINK_HTTP}/rooms/${id}`, headers)
    return response.data.room;
})

export const editOneRoom = createAsyncThunk('updatedRoom/put', async (roomElement) => {
    const response = await axios.put(`${REACT_APP_LINK_HTTP}/rooms/${roomElement.id}`, roomElement.roomObj, headers)

    return response.date.room;
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
                state.roomList.push(action.payload);
            })

            .addCase(deleteOneRoom.fulfilled, (state, action) => {
                state.status = 'success'
                //state.roomList.delete(action.payload)                
            })

            .addCase(editOneRoom.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(editOneRoom.fulfilled, (state, action) => {
                state.status = 'success'
                state.roomList.push(action.payload);
            })
            .addCase(editOneRoom.rejected, (state, action) => {
                state.status = 'loading'
            })
        
    },

})


// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addRoom, deleteRoom, editRoom, getOneElemen } = roomSlice.actions;

// Exportamos los datos de todas la habitaciones
export const roomsListDate = (state) => state.room.roomList;

export default roomSlice.reducer;