import * as React from 'react';
import { ILikeButtonProps } from './like-button';

export default function LikeButton({ numberOfLikes }: ILikeButtonProps) {
	return (
		<div className="like-button">
			<input type="checkbox" name="like" className="like-button" />
			<span className="like-button__number">{numberOfLikes}</span>
			<i className="material-icons like-button__icon">favorite_border</i>
			<i className="material-icons like-button__icon">favorite</i>
		</div>
	);
}
