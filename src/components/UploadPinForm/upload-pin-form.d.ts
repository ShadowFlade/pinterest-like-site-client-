export type NewPost = { title: string; img: string; description: string; file: string };
export interface IUploadPinFormProps {
  isAuth: boolean;
  closeModal: () => void;
}
