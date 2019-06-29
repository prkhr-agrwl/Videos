import axios from "axios";

const KEY = "AIzaSyBwwsu5KhvldZfbofvsksbnIfn84k_bVDs";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		key: KEY,
		part: "snippet",
		maxResults: 5
	}
});
