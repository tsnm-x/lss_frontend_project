import { createSlice } from "@reduxjs/toolkit";

const matchesForCalculations = createSlice({
	name: "matchesForCalculations",
	initialState: {
		matches: []
    },
	reducers: {
		setMatches(state, { payload }) {
			console.log(payload);
			state.matches.push(...payload.matches);
		},
	},
});

export const matchesForCalculationsActions = matchesForCalculations.actions;
export default matchesForCalculations.reducer;
