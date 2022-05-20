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
          tabIndex={1}
          autoFocus
          type="text"
          className="upload-pin__input"
          placeholder="Enter the title"
          aria-label="Title"
        />
        <input
          tabIndex={2}
          type="text"
          className="upload-pin__input"
          placeholder="Describe your pin"
          aria-label="Title"
        />
        <input
          tabIndex={3}
          type="text"
          className="upload-pin__input"
          placeholder="Link your pin (optional)"
          aria-label="Title"
        />

        <label tabIndex={4} className="upload-pin__file btn btn-primary">
          <input type="file" style={{ display: 'none' }} />
          Upload image
        </label>

        <button tabIndex={5} className="upload-pin__submit btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}
