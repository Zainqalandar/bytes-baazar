export function readFileAsync({ event, file }) {
  return new Promise((resolve, reject) => {
    const uploadedFile = event ? event.target.files[0] : file || null;
    if (!uploadedFile) {
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      resolve(`data:${uploadedFile.type};base64,${btoa(reader.result)}`);
    };

    reader.onerror = reject;

    reader.readAsBinaryString(uploadedFile);
  });
}

const uploadImage = async ({ event, file }) => {
  const newImage = await readFileAsync({ event, file });
  return newImage;
};
export default uploadImage;
