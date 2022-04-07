import { createSlice } from "@reduxjs/toolkit";
import { conciergeData } from "../data/concierge";

export const conciergeSlice = createSlice({
    name: 'concierge',

    initialState: {
        conciergeList: conciergeData
    },

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

        getOneConcierge: (state, action) => {
            console.log('get one concierge');
        }
    }
})

// Exportamos los reducer(actions) que nos van a ayudar a interactuar.
export const {addConcierge, deleteConcierge, editConcierge, getOneConcierge} = conciergeSlice.actions;

export const conciergesListDate = (state) => state.concierge.conciergeList;

export default conciergeSlice.reducer;