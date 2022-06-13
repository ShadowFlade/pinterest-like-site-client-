// declare module '*.svg' {
//   import * as React from 'react';

//   export const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;

//   const src: string;
//   export default src;
// }
declare module '*.svg?inline' {
	const content: any;
	export default content;
}
declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
declare module '*.jpeg' {
	const content: any;
	export default content;
}
declare module '*.jpg' {
	const content: any;
	export default content;
}

declare module '*.png' {
	const content: any;
	export default content;
}
