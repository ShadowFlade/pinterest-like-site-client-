import { bindOutsideClickDetection, hideOnClickOutside } from '@/utils/utils';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import './PopItem.scss';
export interface IPopItemProps {
	children: React.ReactElement;
	clickElement: HTMLElement;
	show: React.Dispatch<React.SetStateAction<boolean>>;
	isShow: boolean;
}

export default function PopItem({ children, clickElement, show, isShow }: IPopItemProps) {
	const pop = useRef(null);
	const closeElement = () => {
		show(!isShow);
	};
	const hideOnClick = (e: MouseEvent) => {
		clickElement && pop.current
			? bindOutsideClickDetection(clickElement, pop.current, closeElement)
			: null;
		e.stopImmediatePropagation();
	};
	useEffect(() => {
		document.body.addEventListener('click', hideOnClick);
		return () => {
			document.body.removeEventListener('click', hideOnClick);
		};
	}, []);
	const style = React.useMemo(() => {
		return {
			top: `${clickElement.offsetHeight + clickElement.offsetTop + 5}px`,
			left: `${clickElement.offsetLeft - clickElement.offsetWidth / 2}px`,
		};
	}, [clickElement]);

	return (
		<div className={`pop-item ${isShow ? 'pop-item--active' : null}`} ref={pop} style={style}>
			<div className="pop-item__inner">{children}</div>
		</div>
	);
}
