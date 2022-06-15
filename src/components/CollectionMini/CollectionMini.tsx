import { axiosConfig } from '@/index';
import axios from 'axios';
import * as React from 'react';
import { ICollectionMiniProps } from './collection-mini';
import './CollectionMini.scss';

export default function CollectionMini({
	imgs,
	showCollectionModal,
	setActiveCollection,
}: ICollectionMiniProps) {
	const applyStyle = (img: string | undefined): { background: string } => ({
		background: `no-repeat center / cover url(${img})`,
	});
	const goToCollectionModal = () => {
		setActiveCollection();
		showCollectionModal(true);
	};
	return (
		<div className="collection-mini" onClick={goToCollectionModal}>
			<div className="collection-mini__inner">
				<div className="collection-mini__big-pic" style={applyStyle(imgs[0])}></div>
				<div className="collection-mini__small-pics">
					<div className="collection-mini__small-pic" style={applyStyle(imgs[1])}></div>
					<div className="collection-mini__small-pic" style={applyStyle(imgs[2])}></div>
				</div>
			</div>
		</div>
	);
}
