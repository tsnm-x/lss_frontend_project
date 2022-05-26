import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
	name: "Profile",
	initialState: {
		profile: [
			{
				duration: "",
				players: [],
			},
		],
		region: "",
		summonerName: "",
	},
	reducers: {
		setProfileDataPage(state, { payload }) {
			// console.log(payload, "====> payload");
			state.profile = payload.profile;
			state.region = payload.region;
			state.summonerName = payload.summonerName;
		},
		setMoreMatches(state, { payload }) {
			// console.log(payload);
			state.profile.push(...payload.profile);
		},
	},
});

export const profileAction = profileSlice.actions;
export default profileSlice.reducer;
