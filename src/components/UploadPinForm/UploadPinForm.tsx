import * as React from 'react';
import { useContext, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import { MyContext } from '@/Context/Context';
import './UploadPinForm.scss';
import { IUploadPinFormProps } from './upload-pin-form';
import useCreatePin from '../../hooks/useCreatePin';
export interface PinUploadData {
	title: string;
	img: string;
	authorId: string;
}
export default function UploadPinForm({ closeModal }: IUploadPinFormProps) {
	const { user } = useContext(MyContext);
	const [customTimingDatepicker, setCustomTimingDatepicker] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const useCustomTiming = useRef<null | HTMLInputElement>(null);
	const { mutate } = useCreatePin({ cb: closeModal, user: user || null });
	const defaultErrorMessage = 'This field is required';
	const [imgShow, setImgshow] = useState(false);
	const form = useRef<null | HTMLFormElement>(null);
	const filePreview = useRef<HTMLImageElement | null>(null);

	const onSubmit = async (data: PinUploadData, e: React.FormEvent) => {
		e.preventDefault();
		data.authorId = user?._id || '';
		console.log(data, ' data');
		mutate({ e, data });
	};

	function timingDatepickerToggle() {
		if (useCustomTiming && useCustomTiming.current && useCustomTiming.current.checked) {
			setCustomTimingDatepicker(true);
		} else {
			setCustomTimingDatepicker(false);
		}
	}

	function onFileInput(event: React.ChangeEvent) {
		const reader = new FileReader();
		reader.onload = () =>
			filePreview.current && reader.result && typeof reader.result === 'string'
				? (filePreview.current.src = reader.result)
				: false;
		const inputFile = event.target as HTMLInputElement;
		if (inputFile.files && inputFile.files.length > 0) {
			reader.readAsDataURL(inputFile.files[0]);
			setImgshow(true);
		}
	}
	const dateNow = new Date();
	function formatDate(number: number | string) {
		number = number.toString();
		if (number == '0') {
			number = '00';
		} else if (number.length == 1) {
			number = '0' + number;
		}
		return number;
	}
	const dateTimeIn1Hour = `${formatDate(dateNow.getFullYear())}-${formatDate(
		dateNow.getMonth()
	)}-${formatDate(dateNow.getDate())}T${formatDate(dateNow.getHours() + 1)}:${formatDate(
		dateNow.getMinutes()
	)}`;
	return (
		<div className="upload-pin">
			<form
				className="upload-pin__form centered"
				name="upload-pin"
				method="POST"
				ref={form}
				encType="multipart/form-data"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="upload-pin__item">
					<input
						{...register('title', { required: defaultErrorMessage })}
						tabIndex={1}
						autoFocus
						type="text"
						className="upload-pin__input"
						placeholder="Enter the title"
						aria-label="Title"
					/>
					<p className="upload-pin__error">{errors.title?.message}</p>
				</div>
				<div className="upload-pin__item">
					<input
						{...register('description')}
						tabIndex={2}
						type="text"
						className="upload-pin__input"
						placeholder="Describe your pin"
						aria-label="Description"
					/>
				</div>
				<div className="upload-pin__item">
					<input
						{...register('URL')}
						tabIndex={3}
						type="text"
						className="upload-pin__input"
						placeholder="Link your pin (optional)"
						aria-label="URL"
					/>
				</div>
				<div className="upload-pin__item">
					<div
						className="upload-pin__preview"
						style={{ display: imgShow ? 'block' : 'none' }}
					>
						<img alt="thumbnail" ref={filePreview} />
					</div>
					<label className="upload-pin__file-btn btn btn-primary">
						<input
							{...register('file', { required: defaultErrorMessage })}
							className="upload-pin__file-input"
							type="file"
							onChange={onFileInput}
							tabIndex={4}
						/>
						Upload image
					</label>
					<p className="upload-pin__error"> {errors.file?.message}</p>
				</div>

				<div className="upload-pin__item">
					<label className="upload-pin__label upload-pin__label--set-custom-timing">
						Use custom timing
						<input
							onChange={timingDatepickerToggle}
							ref={useCustomTiming}
							name="use-custom-timing"
							type="checkbox"
						/>
					</label>
				</div>

				<div className="upload-pin__item">
					<label htmlFor="date-to-publish" className="upload-pin__time-picker">
						Choose the time of you publication (optional)
					</label>
					<input
						tabIndex={6}
						id="date-to-publish"
						name="date-to-publish"
						type="datetime-local"
						value={dateTimeIn1Hour}
						disabled={!customTimingDatepicker}
					/>
				</div>

				<div className="upload-pin__item">
					<button tabIndex={6} className="upload-pin__submit btn btn-primary ">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
