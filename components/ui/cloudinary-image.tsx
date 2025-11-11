import Image, { type ImageProps } from "next/image";

import { buildCloudinaryUrl, type CloudinaryTransformationOptions } from "@/lib/cloudinary";

type CloudinaryImageProps = Omit<ImageProps, "src"> & {
  publicId: string;
  transformations?: CloudinaryTransformationOptions;
  deliveryType?: string;
  version?: string | number;
};

export function CloudinaryImage({
  publicId,
  transformations,
  deliveryType,
  version,
  alt,
  ...props
}: CloudinaryImageProps) {
  const src = buildCloudinaryUrl(publicId, transformations, deliveryType, version);

  return <Image src={src} alt={alt} {...props} />;
}

