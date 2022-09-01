const serverURL = `${
	process.env.NODE_ENV === 'production'
		? 'https://floating-earth-90111.herokuapp.com/'
		: 'http://localhost:3002/'
}`;
const frontURL = `${
	process.env.NODE_ENV === 'development' ? '/' : 'https://pinterest-front1337.herokuapp.com'
}`;

let PINS_PER_PAGE : number = 10;
const keys = {
	serverURL,
	frontURL,
	PINS_PER_PAGE
};

export default keys;
