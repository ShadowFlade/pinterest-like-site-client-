import * as React from 'react';
import { Dispatch } from 'react';
import './SpinnerCat.scss';
const catStyle = {
	backgroundColor: '#e6dcdc',
	top: '-1rem',
	position: 'relative' as 'relative',
	borderBottomLeftRadius: '15px',
	borderBottomRightRadius: '15px',
};
export interface ISpinnerCat {
	setIsCatStyle: Dispatch<React.SetStateAction<boolean>>;
}
export default function SpinnerCat(props: ISpinnerCat) {
	props.setIsCatStyle(true);
	return (
		<div className="box">
			<div className="cat">
				<div className="cat__body"></div>
				<div className="cat__body"></div>
				<div className="cat__tail"></div>
				<div className="cat__head"></div>
			</div>
		</div>
	);
}
export { catStyle };
