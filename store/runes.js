import { createSlice } from "@reduxjs/toolkit";

const runeSlice = createSlice({
	name: "Runes",
	initialState: {
		runes: {}
	},
	reducers: {
		setRunes(state, { payload }) {
			console.log(payload, "====> payload");
			state.runes = payload.runes;
		}
	},
});

export const runeAction = runeSlice.actions;
export default runeSlice.reducer;
