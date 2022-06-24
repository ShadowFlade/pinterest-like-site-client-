import { SettingsPhoneTwoTone } from '@mui/icons-material';
import * as React from 'react';
import { Dispatch, forwardRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Collection, ICollectionMiniProps } from '../CollectionMini/collection-mini';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import PostMainPage from '../PostMainPage/PostMainPage';

import './CollectionMiniModal.scss';
export interface ICollectionMiniModalProps {
	closeModal: () => void;
	collection: Collection | undefined;
	show: boolean;
	setShow: Dispatch<React.SetStateAction<boolean>>;
}
const CollectionMiniModal = forwardRef(
	({ closeModal, collection, setShow, show }: ICollectionMiniModalProps, ref) => {
		const hide = () => {
			setShow(false);
		};

		return (
			<Modal
				size="lg"
				fullscreen={true}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={hide}
				// className={` ${
				// 	show ? 'collection-mini__modal--visible' : 'collection-mini__modal--hidden'
				// }`}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter" className="text-center">
						<h2 className="h2 text-center text-capitalize">
							{collection && collection?.title}
						</h2>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{collection && (
						<MasonryLayout
							items={collection?.pins.map((item) => (
								<PostMainPage
									_id={item._id}
									user={item.user}
									img={item.img}
									title={item.title}
								/>
							))}
						/>
					)}
				</Modal.Body>
			</Modal>
		);
	}
);
export default CollectionMiniModal;
