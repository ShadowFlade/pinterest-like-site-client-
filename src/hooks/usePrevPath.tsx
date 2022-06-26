import * as React from 'react';

export default function usePrevPath(value: any) {
	// console.log(value, 'pathname');
	const ref = React.useRef();
	React.useEffect(() => {
		// console.log(value, 'pathname');
		ref.current = value; //assign the value of ref to the argument
		// console.log(value, 'pathname');
	}, [value]); //this code will run when the value of 'value' changes
	// console.log(value, 'pathname');
	return ref.current as unknown as string; //in the end, return the current ref value.
}
