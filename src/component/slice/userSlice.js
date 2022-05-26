import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { conciergeData } from "../data/concierge"; // Este es mi client

/*
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
*/

//llamar una funcion esperar para que devuelva los dotos json

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                /* initialState.conciergeList = */  conciergeData
            );
            reject(
                new Error('Error Date')
            );

        }, 1000);
    });
}

export const fetchUsers = createAsyncThunk('concierge/fetchConcierge', /* async */ () => {
    const response = /* await */ conciergeData
    return response.data.results
})

/* export const addNewConcierge = createAsyncThunk(
    "posts/addNewPost",
    async (initialPost) => {
      const response = await initialPost/* client.post("/fakeApi/posts", initialPost) /;
      return response.data;
    }
); */

const promise = new Promise((resolve, reject) => {
	const number = 4 /* Math.floor(Math.random() * 10) */;

	setTimeout(
		() => number < 5
			? resolve(number)//.then(() => initialState.conciergeList = number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

async function doggido(){
    let respon = await wait();
    return respon;
}


const initialState = {
    //conciergeList: promise.then((number) => {return number}),  //wait(),
    //conciergeList: wait().then((conciergeData) => conciergeData),//wait(),
    //conciergeList: doggido(), //Seguimos con lo mismo
    status: 'idle',
    error: null,
}

export const usersSlice = createSlice({
    name: 'users',

    /* initialState: {
        //conciergeList: promise,
        //conciergeList: wait(),
        /* status: 'idle',
        error: null, /
    }, */

    initialState:{
        usersList: conciergeData
    },

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

        /* getOneUsers: (state, action) => {
            console.log('get one Users');
        } */

    },

    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.users.usersList = state.users.users.concat(action.payload)
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            /* .addCase(addNewUsers.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            }) */
    },
})

// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addUsers, deleteUsers, editUsers, /* getOneUsers */} = usersSlice.actions;

export const usersListDate = (state) => state.users.usersList;

export default usersSlice.reducer;

//Asi obtenemos un Users por ID
export const getOneUsers = (state, id) => state.users.usersList.find((users) => users.id === id);
