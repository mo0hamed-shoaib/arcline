import { v2 as cloudinary } from "cloudinary";

const { CLOUDINARY_URL } = process.env;

if (!CLOUDINARY_URL && process.env.NODE_ENV !== "production") {
  console.warn(
    "CLOUDINARY_URL is not set. Define it in your environment to enable Cloudinary server-side operations."
  );
}

cloudinary.config({ secure: true });

export const cloudinaryServer = cloudinary;

export type UploadOptions = Parameters<typeof cloudinary.uploader.upload>[1];

export const uploadToCloudinary = async (file: string, options?: UploadOptions) => {
  return cloudinary.uploader.upload(file, options);
};

export const uploadLargeToCloudinary = async (file: string, options?: UploadOptions) => {
  return cloudinary.uploader.upload_large(file, options);
};

