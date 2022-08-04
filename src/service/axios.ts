import _axios from "axios";

const axios = _axios.create({
	baseURL: `https://randomuser.me/api/`,
});

axios.interceptors.request.use((config) => {
	if(config.method === 'get') {
		config.params.seed = 'foobar';
	}

	return config;
})

export default axios