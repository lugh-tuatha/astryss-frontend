import { Variant } from "../constants/variants";

export interface Entry {
  _id: string;
  displayName: string;
  title: string;
  content: string;
  avatarUrl: string;
  type: string;
  emotion: 'sad' | 'angry' | 'inlove' | 'other';
  variants?: Variant[];
  createdAtFormatted?: string;
  createdAtToNow?: string;
  created_at: string;
  updated_at: string;
}

interface EntriesMeta {
  limit: number;
  total: number;
  nextCursor: string | null;
  hasMore: boolean;
}

export interface EntriesResponse {
  data: Entry[];
  meta: EntriesMeta;
}