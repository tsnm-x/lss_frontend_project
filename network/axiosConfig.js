import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://lss-server-test.herokuapp.com",
	// baseURL: "http://localhost:3300",
});
