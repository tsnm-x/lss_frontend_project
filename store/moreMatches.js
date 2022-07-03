import { createSlice } from "@reduxjs/toolkit";

const moreMatchesSlice = createSlice({
	name: "moreMatches",
	initialState: {
		matches: []
		
	},
	reducers: {
		setMoreMatches(state, { payload }) {
			console.log(payload, "====> payload");
			state.matches = payload;
		}
	},
});

export const moreMatchesAction = moreMatchesSlice.actions;
export default moreMatchesSlice.reducer;
