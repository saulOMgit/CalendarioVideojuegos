import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
   name: 'calendar',
   initialState: {
      juegos:[]
   },
   reducers: {
      setJuegos: (state, action ) => {
         state.juegos = action.payload;
     },
   }
});
// Action creators are generated for each case reducer function
export const { setJuegos } = calendarSlice.actions;