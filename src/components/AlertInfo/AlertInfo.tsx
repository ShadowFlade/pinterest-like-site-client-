import * as React from 'react';

export interface IAlertInfoProps {
	text: string;
	visible: boolean;
}

export default function AlertInfo({ text, visible }: IAlertInfoProps) {
	return (
		<div
			className={`alert alert-info position-fixed bottom-0 end-0 m-2 ${
				visible ? 'visible' : 'invisible'
			}`}
		>
			{text}
		</div>
	);
}
