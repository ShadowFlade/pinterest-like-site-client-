declare function randomNumberBetween(min: number, max: number): number;
declare function sample(array: any[]): any;
declare const hideOnClickOutside: (e: MouseEvent, clickElement: null | HTMLElement, popElement: null | HTMLElement, cb?: () => void) => void;
declare const bindOutsideClickDetection: (clickElementName: string | HTMLElement, popElementName: string | HTMLElement, cb: () => void) => void;
declare const calculateThePositionOfPopupElement: (anchorElement: HTMLElement | HTMLDivElement | null, popupElement: HTMLElement | null) => {
    offsetLeft: number;
    offsetTop: number;
} | false;
export { sample, randomNumberBetween, bindOutsideClickDetection, hideOnClickOutside, calculateThePositionOfPopupElement, };
