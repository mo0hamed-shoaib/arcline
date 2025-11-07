import Image, { type ImageProps } from "next/image";

import { buildCloudinaryUrl, type CloudinaryTransformationOptions } from "@/lib/cloudinary";

type CloudinaryImageProps = Omit<ImageProps, "src"> & {
  publicId: string;
  transformations?: CloudinaryTransformationOptions;
  deliveryType?: string;
};

export function CloudinaryImage({
  publicId,
  transformations,
  deliveryType,
  alt,
  ...props
}: CloudinaryImageProps) {
  const src = buildCloudinaryUrl(publicId, transformations, deliveryType);

  return <Image src={src} alt={alt} {...props} />;
}

