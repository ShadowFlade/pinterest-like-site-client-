import * as React from 'react';
import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import { axiosConfig } from '../../App';
import './UploadPinForm.scss';
import { IUploadPinFormProps } from './upload-pin-form';
import useCreatePin from '../../hooks/useCreatePin';

export default function UploadPinForm({ isAuth, closeModal }: IUploadPinFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = useCreatePin(closeModal);

  const defaultErrorMessage = 'This field is required';
  const [imgShow, setImgshow] = useState(false);
  const form = useRef<null | HTMLFormElement>(null);
  const filePreview = useRef<HTMLImageElement | null>(null);

  const onSubmit = async (data: { [key: string]: string }, e: React.FormEvent) => {
    e.preventDefault();
    mutate(e);
  };

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
          <div className="upload-pin__preview" style={{ display: imgShow ? 'block' : 'none' }}>
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
          <button tabIndex={5} className="upload-pin__submit btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
