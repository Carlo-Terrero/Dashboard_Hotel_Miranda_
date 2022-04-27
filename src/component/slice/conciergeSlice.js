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

export const fetchConcierge = createAsyncThunk('concierge/fetchConcierge', /* async */ () => {
    const response = /* await */ conciergeData
    return response.data
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
    //conciergeList: promise.then((number) => {return number.json()}),//wait(),
    //conciergeList: wait().then((conciergeData) => conciergeData),//wait(),
    //conciergeList: doggido(), //Seguimos con lo mismo
    status: 'idle',
    error: null,
}

export const conciergeSlice = createSlice({
    name: 'concierge',

    /* initialState: {
        //conciergeList: promise,
        //conciergeList: wait(),
        /* status: 'idle',
        error: null, /
    }, */

    initialState,

    reducers: {
        addConcierge: (state, action) => {
            console.log('add concierge');
        },

        deleteConcierge: (state, action) => {
            console.log('delete concerge');
        },

        editConcierge: (state, action) => {
            console.log('edit concierge');
        },

        /* getOneConcierge: (state, action) => {
            console.log('get one concierge');
        } */

    },

    extraReducers(builder) {
        builder
            .addCase(fetchConcierge.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchConcierge.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.concierge.conciergeList = state.concierge.concierge.concat(action.payload)
            })
            .addCase(fetchConcierge.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            /* .addCase(addNewConcierge.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            }) */
    },
})

// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addConcierge, deleteConcierge, editConcierge, /* getOneConcierge */} = conciergeSlice.actions;

export const conciergesListDate = (state) => state.concierge.conciergeList;

export default conciergeSlice.reducer;

//Asi obtenemos un concierge por ID
export const getOneConcierge = (state, id) => state.concierge.conciergeList.find((concierge) => concierge.id === id);
