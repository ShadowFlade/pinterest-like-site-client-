declare function randomNumberBetween(min: number, max: number): number;
declare function sample(array: any[]): any;
declare const hideOnClickOutside: (e: MouseEvent, clickElement: null | HTMLElement, popElement: null | HTMLElement, cb?: (() => void) | undefined) => void;
declare const bindOutsideClickDetection: (clickElementName: string | HTMLElement, popElementName: string | HTMLElement) => void;
export { sample, randomNumberBetween, bindOutsideClickDetection, hideOnClickOutside };
