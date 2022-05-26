import axios from 'axios';
import * as React from 'react';
import { instance } from '../../App';
import getBase64 from '../../utils/convertFileToBase64';
import './UploadPinForm.scss';
import { useRef, useState } from 'react';
export interface IUploadPinFormProps {
  isAuth: boolean;
}
export type NewPost = { title: string; img: string; description: string; file: string };

export default function UploadPinForm({ isAuth }: IUploadPinFormProps) {
  const [imgShow, setImgshow] = useState(false);
  const form = useRef<null | HTMLFormElement>(null);
  const filePreview = useRef<HTMLImageElement | null>(null);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newData = new FormData(e.target as HTMLFormElement);

    await instance
      .post('/pinupload', newData, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3002',
        },
      })
      .then(({ data }) => console.log(data))
      .catch((e) => console.log(e));
  };
  function onFileInput(event: React.ChangeEvent) {
    const reader = new FileReader();
    reader.onload = () =>
      filePreview.current && reader.result && typeof reader.result === 'string'
        ? (filePreview.current.src = reader.result)
        : false;
    const inputFile = event.target as HTMLInputElement;
    console.log('🚀 ~ file: UploadPinForm.tsx ~ line 37 ~ onFileInput ~ inputFile', inputFile);
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
          required
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
        <div className="upload-pin__preview" style={{ display: imgShow ? 'block' : 'none' }}>
          <img alt="thumbnail" ref={filePreview} />
        </div>

        <label tabIndex={4} className="upload-pin__file btn btn-primary">
          <input name="file" type="file" style={{ display: 'none' }} onChange={onFileInput} />
          Upload image
        </label>

        <button tabIndex={5} className="upload-pin__submit btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}
