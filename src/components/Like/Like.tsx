import { Favorite, FavoriteBorder } from '@mui/icons-material';
import * as React from 'react';
import { Dispatch, forwardRef, useRef, useState } from 'react';
import './Like.scss';
export interface ILikeProps {
	color: string;
	liked: boolean;
	setIsLiked: Dispatch<React.SetStateAction<boolean>>;
}

const Like = forwardRef(
	({ color, liked, setIsLiked }: ILikeProps, ref: React.RefObject<HTMLInputElement>) => {
		// const isChecked = ref && ref.current && ref.current.checked;
		const favoriteStyles = {
			fill: liked ? color : 'transparent',
			opacity: liked ? 1 : 0,
		};
		const favoriteBorderStyles = { fill: color };
		const like = () => {
			setIsLiked(!liked);
		};
		return (
			<div className="like" onClick={like}>
				<Favorite className="like__icon" style={favoriteStyles} />
				<FavoriteBorder
					fontSize="large"
					className="like__icon like__icon--secondary  like__icon--floating"
					style={favoriteBorderStyles}
				/>
			</div>
		);
	}
);
export default Like;
