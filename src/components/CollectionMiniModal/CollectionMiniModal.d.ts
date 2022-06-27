import * as React from 'react';
import { Dispatch } from 'react';
import { Collection } from '../CollectionMini/collection-mini';
import './CollectionMiniModal.scss';
export interface ICollectionMiniModalProps {
    closeModal: () => void;
    collection: Collection | undefined;
    show: boolean;
    setShow: Dispatch<React.SetStateAction<boolean>>;
}
declare const CollectionMiniModal: React.ForwardRefExoticComponent<ICollectionMiniModalProps & React.RefAttributes<unknown>>;
export default CollectionMiniModal;
