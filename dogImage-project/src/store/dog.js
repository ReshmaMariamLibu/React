import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDogImage } from '../api/dogGetter';

const initialState= {
    image: '',
    status: 'idle',
    error: null,
}

export const dogImage = createAsyncThunk(
    'dogImagegetter',
     async () => {
        const response = await fetchDogImage();
        return response?.data;
});

const dogImageSlice = createSlice({
    name: 'dogimage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(dogImage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(dogImage.fulfilled, (state, action) => {
                state.status = 'succeeded';
               
                state.image = action.payload;
            })
            .addCase(dogImage .rejected, (state, action) => {
                state.status = 'failed';
                
                state.error = action.error.message;
            });
    },
});

export default dogImageSlice.reducer;


