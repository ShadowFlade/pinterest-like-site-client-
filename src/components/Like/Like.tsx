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
		const isChecked = ref && ref.current && ref.current.checked;
		const favoriteStyles = {
			fill: isChecked ? color : 'transparent',
			opacity: isChecked ? 1 : 0,
		};
		const favoriteBorderStyles = { fill: color };
		const like = () => {
			setIsLiked(!liked);
		};
		return (
			<span className="like">
				<input
					onClick={like}
					ref={ref}
					type="checkbox"
					name="like"
					className="like__input"
				/>
				<Favorite className="like__icon" style={favoriteStyles} />
				<FavoriteBorder
					className="like__icon like__icon--secondary"
					style={favoriteBorderStyles}
				/>
			</span>
		);
	}
);
export default Like;
