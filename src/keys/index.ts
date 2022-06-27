const keys = {
	baseURL: `${
		process.env.NODE_ENV === 'production'
			? 'https://floating-earth-90111.herokuapp.com/'
			: 'http://localhost:3002/'
	}`,
};
export default keys;
