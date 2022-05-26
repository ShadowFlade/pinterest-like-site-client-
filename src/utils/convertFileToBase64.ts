export default function getBase64(file: File) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = function () {
      res(reader.result);
    };
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
}
