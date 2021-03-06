import * as React from 'react';
import { DOMElement } from 'react';

function randomNumberBetween(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function sample(array: any[]) {
	return array[randomNumberBetween(0, array.length - 1)];
}
const isVisible = (elem: HTMLElement | null) => {
	if (!!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)) {
		return true;
	} else {
		return false;
	}
};

const hideOnClickOutside = (
	e: MouseEvent,
	clickElement: null | HTMLElement,
	popElement: null | HTMLElement,
	cb?: () => void
) => {
	const target = e.target as Node;
	const isClickInside =
		clickElement?.contains(target) || clickElement?.parentNode?.contains(target);

	if (!isClickInside) {
		if (!!cb) {
			cb();
		} else {
			popElement ? (popElement.style.display = 'none') : null;
		}
	}
};
// +closes and opens a popelement on click on clickelement
const bindOutsideClickDetection = (
	clickElementName: string | HTMLElement,
	popElementName: string | HTMLElement,
	cb: () => void
) => {
	let clickElement: null | HTMLElement;
	let popElement: null | HTMLElement;
	if (typeof clickElementName === 'string') {
		clickElement = document.querySelector(clickElementName) as HTMLElement;
	} else if (typeof clickElementName === 'object') {
		clickElement = clickElementName;
	} else {
		clickElement = null;
	}
	if (typeof popElementName === 'string') {
		popElement = document.querySelector(popElementName) as HTMLElement;
	} else if (typeof popElementName === 'object') {
		popElement = popElementName;
	}

	const handleElementClicked = (e: MouseEvent) => {
		const target = e.target as Node;
		const kidsHaveTarget = popElement?.contains(target);
		if (!isVisible(popElement)) {
			popElement ? (popElement.style.display = 'block') : null;
			e.stopPropagation();
			document.addEventListener('click', (e: MouseEvent) =>
				hideOnClickOutside(e, clickElement, popElement, cb)
			);
		} else if (isVisible(popElement) && !kidsHaveTarget) {
			popElement ? (popElement.style.display = 'none') : null;
			document.removeEventListener('click', (e: MouseEvent) =>
				hideOnClickOutside(e, clickElement, popElement, cb)
			);
		}
	};
	try {
		clickElement ? clickElement.addEventListener('click', handleElementClicked) : null;
	} catch (e) {
		let errMsg = `Element with classname ${clickElementName} not found`;
		if (typeof clickElementName === 'string' && clickElementName.includes('burger')) {
			errMsg += `\n Probably no header on the page`;
		}
		console.warn(errMsg);
	}
};

const calculateThePositionOfPopupElement = (
	anchorElement: HTMLElement | HTMLDivElement | null,
	popupElement: HTMLElement | null
): { offsetLeft: number; offsetTop: number } | false => {
	if (anchorElement !== null && popupElement !== null) {
		const offsetLeft =
			anchorElement?.offsetLeft -
			(popupElement.offsetWidth / 2 - anchorElement?.offsetWidth - 2);
		const offsetTop =
			anchorElement?.offsetTop -
			(popupElement.offsetHeight / 2 - anchorElement?.offsetHeight - 2);
		return {
			offsetLeft,
			offsetTop,
		};
	} else {
		return false;
	}
};

export {
	sample,
	randomNumberBetween,
	bindOutsideClickDetection,
	hideOnClickOutside,
	calculateThePositionOfPopupElement,
};
