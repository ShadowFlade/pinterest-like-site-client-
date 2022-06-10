function randomNumberBetween(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function sample(array: any[]) {
	return array[randomNumberBetween(0, array.length - 1)];
}
export { sample, randomNumberBetween };
