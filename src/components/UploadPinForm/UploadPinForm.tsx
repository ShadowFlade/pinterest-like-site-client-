import axios from 'axios';
import * as React from 'react';
import { instance } from '../../App';
import getBase64 from '../../utils/convertFileToBase64';
import './UploadPinForm.scss';
import { useRef } from 'react';
export interface IUploadPinFormProps {
  isAuth: boolean;
}
export type NewPost = { title: string; img: string; description: string; file: string };

export default function UploadPinForm({ isAuth }: IUploadPinFormProps) {
  const form = useRef<null | HTMLFormElement>(null);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const data: { [key: string]: any } = {};
    const newData = new FormData(e.target as HTMLFormElement);
    // for (let [key, value] of newData.entries()) {
    //   data[key] = value;
    // }
    await instance
      .post('/pinupload', newData, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3002',
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
        encType="multipart/form-data"
      >
        <input
          name="title"
          tabIndex={1}
          autoFocus
          type="text"
          className="upload-pin__input"
          placeholder="Enter the title"
          aria-label="Title"
        />
        <input
          name="description"
          tabIndex={2}
          type="text"
          className="upload-pin__input"
          placeholder="Describe your pin"
          aria-label="Title"
        />
        <input
          name="URL"
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
