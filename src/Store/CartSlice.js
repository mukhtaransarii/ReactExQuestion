import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

// Correct export of actions
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
