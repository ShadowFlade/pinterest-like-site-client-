import * as React from 'react';

export interface IUploadPinFormProps {
  isAuth: boolean;
}

export default function UploadPinForm({ isAuth }: IUploadPinFormProps) {
  return (
    <div className="upload-pin">
      <form className="upload-pin__form" name="upload-pin" action="" method="POST">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a title"
          aria-label="Title"
        />
      </form>
    </div>
  );
}
