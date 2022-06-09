import * as React from 'react';
import './SpinnerCat.scss';

export default function SpinnerCat() {
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
