import { createSlice } from "@reduxjs/toolkit";

const championsSlice = createSlice({
	name: "Champions",
	initialState: {
		champions: {}
	},
	reducers: {
		setChampions(state, { payload }) {
			state.champions = payload.champions;
		}
	},
});

export const championsAction = championsSlice.actions;
export default championsSlice.reducer;
