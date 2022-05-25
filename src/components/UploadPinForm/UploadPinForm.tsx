import axios from 'axios';
import * as React from 'react';
import { instance } from '../../App';
import './UploadPinForm.scss';
import { useRef } from 'react';
export interface IUploadPinFormProps {
  isAuth: boolean;
}

export default function UploadPinForm({ isAuth }: IUploadPinFormProps) {
  const form = useRef<null | HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    const data = new FormData(form.current ? form.current : undefined);

    e.preventDefault();
    console.log(data);
    instance
      .post('/pinupload', data, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3002',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => console.log(data))
      .catch((e) => console.log(e));
  };
  return (
    <div className="upload-pin">
      <form
        className="upload-pin__form centered"
        name="upload-pin"
        method="POST"
        onSubmit={onSubmit}
        ref={form}
      >
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
          <input name="file" type="file" style={{ display: 'none' }} />
          Upload image
        </label>

        <button tabIndex={5} className="upload-pin__submit btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}
