const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const useCloudinary = process.env.NEXT_PUBLIC_USE_CLOUDINARY === "true";

const DEFAULT_DELIVERY_TYPE = "image/upload";

export type CloudinaryTransformationOptions = {
  width?: number;
  height?: number;
  quality?: "auto" | number;
  format?: "auto" | string;
  crop?: "fill" | "fit" | "thumb" | "scale" | string;
  gravity?: "auto" | string;
  dpr?: "auto" | number;
  flags?: string | string[];
};

const buildTransformationString = (options?: CloudinaryTransformationOptions) => {
  if (!options) return "";

  const parts: string[] = [];

  if (options.width) parts.push(`w_${options.width}`);
  if (options.height) parts.push(`h_${options.height}`);
  if (options.crop) parts.push(`c_${options.crop}`);
  if (options.gravity) parts.push(`g_${options.gravity}`);
  if (options.quality ?? options.quality === 0) parts.push(`q_${options.quality}`);
  if (options.format) parts.push(`f_${options.format}`);
  if (options.dpr) parts.push(`dpr_${options.dpr}`);

  if (options.flags) {
    const flags = Array.isArray(options.flags) ? options.flags : [options.flags];
    if (flags.length) parts.push(`fl_${flags.join(".")}`);
  }

  return parts.join(",");
};

const sanitizePublicId = (publicId: string) => publicId.replace(/^\/+/ , "");

const formatVersionSegment = (version?: string | number) => {
  if (version === undefined || version === null) return undefined;
  const value = version.toString();
  return value.startsWith("v") ? value : `v${value}`;
};

export const buildCloudinaryUrl = (
  publicId: string,
  options?: CloudinaryTransformationOptions,
  deliveryType: string = DEFAULT_DELIVERY_TYPE,
  version?: string | number
) => {
  const safePublicId = sanitizePublicId(publicId);
  if (!useCloudinary || !cloudName) {
    if (process.env.NODE_ENV !== "production" && !cloudName) {
      console.warn(
        "Cloudinary cloud name is not set. Define NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME to enable Cloudinary optimisations."
      );
    }
    return safePublicId;
  }

  const transformation = buildTransformationString(options);
  const segments = ["https://res.cloudinary.com", cloudName, deliveryType];

  if (transformation) {
    segments.push(transformation);
  }

  const versionSegment = formatVersionSegment(version);
  if (versionSegment) {
    segments.push(versionSegment);
  }

  segments.push(safePublicId);

  return segments.join("/");
};

export const cloudinaryConfig = {
  cloudName,
  enabled: useCloudinary,
  deliveryType: DEFAULT_DELIVERY_TYPE,
};

export const defaultImageTransformation: CloudinaryTransformationOptions = {
  crop: "fill",
  gravity: "auto",
  quality: "auto",
  format: "auto",
};

export const getCloudinaryImageUrl = (
  publicId: string,
  version?: string | number,
  overrides?: CloudinaryTransformationOptions,
  deliveryType: string = DEFAULT_DELIVERY_TYPE
) => {
  const base = { ...defaultImageTransformation };
  const transformations = overrides ? { ...base, ...overrides } : base;

  return buildCloudinaryUrl(publicId, transformations, deliveryType, version);
};
