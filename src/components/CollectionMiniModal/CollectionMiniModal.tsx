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
				animation={false}
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						<h4>{collection && collection?.title}</h4>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{collection && (
						<MasonryLayout
							items={collection?.pins.map((item) => (
								<PostMainPage
									_id={item._id}
									author={item.author}
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
