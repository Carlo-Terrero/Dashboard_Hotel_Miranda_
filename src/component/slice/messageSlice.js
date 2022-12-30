import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {REACT_APP_LINK_HTTP} from '../../env';

const token = localStorage.getItem('Token')

const headers = {headers: {'Authorization': `Bearer  ${token}`} }

const initialState ={
    messageList: [],
    status: 'idle',
}

export const getMessage = createAsyncThunk('getMessage/Get', async () =>{
    const response = await axios.get(`${REACT_APP_LINK_HTTP}/messages`,
        headers,
    )
    
    return response.data.messages;
});

export const messageSlice = createSlice({
    name: 'message',

    initialState,

    reducers: {
        addMessage: (state, action) => {
            console.log('add Message');
        },
        deleteMessage: (state, action) => {
            console.log('delete Message');
        },
        editMessage: (state, action) => {
            console.log('edit Message');
        },
        getOneMessage: (state,action) => {
            console.log('get one Message');
        },
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getMessage.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getMessage.fulfilled, (state, action) => {
                state.status = 'success'                
                state.messageList = action.payload
            })
            .addCase(getMessage.rejected, (state, action) => {
                state.status = 'failed'                
            })
    }

})

export const {addMessage, deleteMessage, editMessage} = messageSlice.actions;

// Exportamos los datos de todas la habitaciones
export const messageListData = (state) => state.message.messageList;

export default messageSlice.reducer;