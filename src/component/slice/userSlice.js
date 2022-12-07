import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {REACT_APP_LINK_HTTP} from '../../env';

const token = localStorage.getItem('Token');

const headers = {headers: 
    {'Authorization': `Bearer  ${token}`}
}

const initialState ={
    usersList: [],
    status: 'idle',
    //error: null
}

export const getUsers = createAsyncThunk('users/get', async () => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/users`, 
        headers
    );
    
    return response.data.result;
});

export const postNewUser = createAsyncThunk('newUser/post', async (obj) => {
    const response = await axios.post(`${REACT_APP_LINK_HTTP}/users`,
        obj,
        headers
    );

    return response.data.result;
});

export const getOneUser = createAsyncThunk('getOneUser/get', async (id) => {
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/users/${id}`, 
        headers
    );
    
    return [response.data.result];
})

export const updateOneUser = createAsyncThunk('putOneUser/put.', async (id) => {
    const response = await axios.put(`${REACT_APP_LINK_HTTP}/users/${id}`,
        headers
    );

    return response.date.result;
})

export const usersSlice = createSlice({
    name: 'users',

    initialState,

    reducers: {
        addUsers: (state, action) => {
            console.log('add Users');
        },

        deleteUsers: (state, action) => {
            console.log('delete concerge');
        },

        editUsers: (state, action) => {
            console.log('edit Users');
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'success'
                state.usersList = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            /* .addCase(addNewUsers.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            }) */
            .addCase(postNewUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(postNewUser.fulfilled, (state, action) => {
                state.status = 'success'                
                state.usersList.push(action.payload);
            })
            .addCase(postNewUser.rejected, (state, action) => {
                state.status = 'failed'                
            })

            .addCase(getOneUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getOneUser.fulfilled, (state, action) => {
                state.status = 'success'             
                state.usersList = action.payload
            })
            .addCase(getOneUser.rejected, (state, action) => {
                state.status = 'failed'                
            })

            .addCase(updateOneUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(updateOneUser.fulfilled, (state, action) => {
                state.status = 'success'                
                state.usersList.push(action.payload);
            })
            .addCase(updateOneUser.rejected, (state, action) => {
                state.status = 'failed'                
            })
    },
})

// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addUsers, deleteUsers, editUsers, /* getOneUser */} = usersSlice.actions;


export const usersListDate = (state) => state.user.usersList;

export default usersSlice.reducer;