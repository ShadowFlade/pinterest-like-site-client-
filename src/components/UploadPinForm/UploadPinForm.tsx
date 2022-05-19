import * as React from 'react';
import './UploadPinForm.scss';
export interface IUploadPinFormProps {
  isAuth: boolean;
}

export default function UploadPinForm({ isAuth }: IUploadPinFormProps) {
  return (
    <div className="upload-pin">
      <form className="upload-pin__form centered" name="upload-pin" action="" method="POST">
        <input
          type="text"
          className="upload-pin__input"
          placeholder="Enter the title"
          aria-label="Title"
        />
        <input
          type="text"
          className="upload-pin__input"
          placeholder="Describe your pin"
          aria-label="Title"
        />
        <input
          type="text"
          className="upload-pin__input"
          placeholder="Link your pin (optional)"
          aria-label="Title"
        />

        <button className="upload-pin__button btn btn-primary btn-lg text-blue" type="button">
          Upload image
        </button>

        <button className="upload-pin__submit btn btn-primary ">Submit</button>
      </form>
    </div>
  );
}
