import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
	name: "Items",
	initialState: {
		items: {}
	},
	reducers: {
		setItems(state, { payload }) {
			state.items = payload.items;
		}
	},
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice.reducer;
