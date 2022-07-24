import { createSlice } from "@reduxjs/toolkit";

const champSlice = createSlice({
	name: "Champions",
	initialState: {
		champions: []
	},
	reducers: {
		setChamp(state, { payload }) {
			state.champions = payload;
		}
	},
});

export const champAction = champSlice.actions;
export default champSlice.reducer;
