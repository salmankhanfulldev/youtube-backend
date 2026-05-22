import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
      // upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      // file has been successfully uploaded
      console.log("File uploaded successfully on cloudinary", response.url);
      return response;
    } catch (error) {
      fs.unlinkSync(localFilePath); // remove the locally saved memory file as the upload operation has failed
      return null;
      console.log(error);
    }
  };

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "main-sample",
      }
    )
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);

  // Transform the image
  const imageUrl = cloudinary.image("main-sample");

  console.log(imageUrl);
})();

export { cloudinary };
