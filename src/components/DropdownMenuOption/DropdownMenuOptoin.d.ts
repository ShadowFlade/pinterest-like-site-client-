/// <reference types="react" />
export interface IDropdownMenuOptionProps {
    icon?: JSX.Element;
    action: () => void;
    modif?: string;
    text: string;
}
export default function DropdownMenuOption({ action, modif, icon, text, }: IDropdownMenuOptionProps): JSX.Element;
