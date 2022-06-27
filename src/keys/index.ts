const serverURL = `${
	process.env.NODE_ENV === 'production'
		? 'https://floating-earth-90111.herokuapp.com/'
		: 'http://localhost:3002/'
}`;
const frontURL = `${
	process.env.NODE_ENV === 'development'
		? '/'
		: 'https://shadowflade.github.io/pinterest-like-site-client-/'
}`;

const keys = {
	serverURL,
	frontURL,
};
export default keys;
