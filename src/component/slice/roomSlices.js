import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { roomsData } from "../data/rooms";

const initialState ={
    roomList: [],
    status: 'idk',
    //error: null
}

/* const getRoomsData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve( 
                roomsData
            ); 
            reject(
                new Error('Error Date')
            );

        }, 1000);
    })
}; */

export const getRooms = createAsyncThunk('get/roms', async () =>{
    const response = await axios.get('http://localhost:3001/rooms')
    return response.data;
});

/* let a;
const res = async () => {
    const res = await wait();
    console.log(res) // Aqui me da el array de objetos 
    a = res;
    console.log(a)
    return a;
} */
//console.log(res());//Debuelve promesa sin responder

//console.log(a)

/* const initialState ={
    //roomList: wait(), //Me da la promesa sin respondes
    roomList: roomsData,
    //roomList: '',
    //roomList: a,
    //roomList: await res() ,
    status: 'idle',
    error: null
} */

/* const initialState = async () => { return { 
    //roomList: await res(),
    roomList: roomsData,
    status: 'idle',
    error: null
} } */

/* let a;
wait()
    //.then((response) => console.log(response, '---'))
    .then((response => {a = response}))
//console.log('klk')
console.log(a) */

export const roomSlice = createSlice({
    name: 'room',

    initialState,/* : {
        roomList: roomsData,
    }, */

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
                // Add any fetched posts to the array
                //state.users.usersList = state.users.users.concat(action.payload)
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