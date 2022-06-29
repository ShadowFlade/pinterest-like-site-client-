const serverURL = `${
	process.env.NODE_ENV === 'production'
		? 'https://floating-earth-90111.herokuapp.com/'
		: 'http://localhost:5000/'
}`;
const frontURL = `${
	process.env.NODE_ENV === 'development' ? '/' : '/pinterest-like-site-client-/'
}`;

const keys = {
	serverURL,
	frontURL,
};
export default keys;
