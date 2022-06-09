import * as React from 'react';
import { ILikeButtonProps } from './like-button';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useRef, useState } from 'react';
import './LikeButton.scss';
import Like from '../Like/Like';
export default function LikeButton({ numberOfLikes }: ILikeButtonProps) {
	const checkbox = useRef<HTMLInputElement>(null);
	const [liked, setLiked] = useState(false);
	const like = () => {
		setLiked(!liked);
	};
	return (
		<div className="like-button fs-5  d-flex align-items-center">
			<span className="like-button__number display-3">
				{liked ? numberOfLikes + 1 : numberOfLikes}
			</span>
			<span className="like-button__like  ms-1" onClick={like}>
				<Like ref={checkbox} color="red" liked={liked} setIsLiked={setLiked} />
			</span>
		</div>
	);
}
