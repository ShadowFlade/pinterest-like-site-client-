/// <reference types="react" />
import './SuggestedPanel.scss';
export interface ISuggestedPanelProps {
    keywords: string[];
    currentPinId: string;
}
export default function SuggestedPanel({ keywords, currentPinId }: ISuggestedPanelProps): JSX.Element;
