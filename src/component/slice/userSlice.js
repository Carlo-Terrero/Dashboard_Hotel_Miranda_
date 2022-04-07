import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',

    initialState: {
        userList: {}
    },

    reducers: {

        addUser: (state, action) => {
            console.log('add User');
        },

        deleteUser: (state, action) => {
            console.log('delete User');
        },

        editUser: (state, action) => {
            console.log('edit User');
        },

        getOneUser: (state,action) => {
            console.log('get one user');
        },

    },

})

// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addUser, deleteUser, editUser, getOneUser} = userSlice.actions;

// Exportamos los datos de todas la habitaciones
export const userListDate = (state) => state.user.userList;

export default userSlice.reducer;