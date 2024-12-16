import { Card, Typography } from "@material-tailwind/react";
import { PiImage } from "react-icons/pi";

function UploadImage() {
  //   const [selectedImage, setSelectedImage] = useState(null);
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setSelectedImage(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // };
  // async function handleFilePicker() {
  //  const [fileHandle] = await window.showOpenFilePicker();
  //   const file = await fileHandle.getFile();
  //   // Now you can access the file object
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setSelectedImage(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // }
  //   const storageRef = ref(storage, "images/my-image.jpg");
  //   function uploadFile() {
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //       },
  //       (error) => {
  //         console.error("Error during upload:", error);
  //       },
  //       () => {
  //         // Handle successful uploads on complete
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           console.log("File available at", downloadURL);
  //         });
  //       },
  //     );
  //   }

  return (
    <Card
      className="grid items-center justify-center gap-5 bg-dark-100 px-3 py-5 sm:grid-cols-3"
      title="image upload currently disabled"
    >
      <Typography className="text-center text-sm">Profile picture</Typography>
      <div className="relative flex items-center justify-center space-y-2 rounded-none bg-transparent py-4 text-center align-middle">
        {/* <input type="file" accept=".png,.jpeg,.jpg" onChange={handleFilePicker} hidden /> */}
        <div className=" ">
          <PiImage className="text-4xl text-primary-300 md:text-5xl" />
        </div>
        <span
          className="absolute cursor-pointer text-base font-semibold text-black hover:text-primary-300"
          //   onClick={handleFilePicker}
        >
          + upload image
        </span>
      </div>
      <Typography className="text-xs md:text-[10px]">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </Typography>
    </Card>
  );
}

export default UploadImage;
