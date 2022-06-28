import * as React from 'react';

export default function usePrevPath(value: any) {
	const ref = React.useRef();
	React.useEffect(() => {
		ref.current = value; //assign the value of ref to the argument
	}, [value]); //this code will run when the value of 'value' changes
	return ref.current as unknown as string; //in the end, return the current ref value.
}
