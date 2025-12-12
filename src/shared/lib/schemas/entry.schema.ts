import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export const createEntrySchema = z.object({
  displayName: z.string().max(15).optional(),
  title: z.string().max(20).optional(),
  content: z.string().min(1, "Content is required").max(500),
  type: z.enum(["release", "unsent", "whisper"]),
  emotion: z.enum(["sad", "angry", "inlove", "other"]),
  variants: z.array(z.enum(["legacy", "dev", "beta"])).optional(),
  avatar: z
    .custom<FileList>()
    .optional()
    .refine((files) => {
      if (!files || files.length === 0) return true;
      return files.length === 1;
    }, "Please select only one file")
    .refine((files) => {
      if (!files || files.length === 0) return true;
      return files[0].size <= MAX_FILE_SIZE;
    }, "File size must be less than 2MB")
    .refine((files) => {
      if (!files || files.length === 0) return true;
      return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
    }, "Only PNG, JPG, and JPEG files are allowed"),
});

export type CreateEntryInput = z.infer<typeof createEntrySchema>;