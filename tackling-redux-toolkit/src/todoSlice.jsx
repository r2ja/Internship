import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

const getAPI = createAsyncThunk(
    'todo/getTodo',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response.data)
        return response.data;  
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items:[],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAPI.pending, (state) => {
                state.status='loading';
            })
            .addCase(getAPI.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getAPI.rejected, (state, action) => {
                state.status = 'failed';
                state.items = action.error.message;
            });

    },
});

export const selectToDos = (state) => state.todos.items;

export { getAPI };

export default todoSlice.reducer;