import { Variant } from "motion/react";
import { CreateEntryInput } from "../lib/schemas/entry.schema";
import { EntriesResponse } from "../types/entry";
import { BASE_URL } from "../utils/constants";

export async function getEntries(limit: number, cursor?: string) {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
    });

    if (cursor) {
      params.append('cursor', cursor);
    }

    const url = `${BASE_URL}/entries?${params.toString()}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data: EntriesResponse = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Fetch error:', error.message);
      throw error;
    }
    
    throw new Error('An unexpected error occurred while fetching entries');
  }
}

export async function getEntriesServerSide(limit: number): Promise<EntriesResponse> {
  return getEntries(limit);
}

export interface CreateEntryResponse {
  id: string;
  displayName?: string;
  content: string;
  avatarUrl: string;
  type: string;
  emotion?: string;
  variants?: Variant[];
  createdAt: string;
}

export async function createEntry(data: CreateEntryInput): Promise<CreateEntryResponse> {
  const formData = new FormData();

  if (data.displayName) {
    formData.append("displayName", data.displayName);
  }
  formData.append("content", data.content);
  formData.append("type", data.type);
  if (data.emotion) {
    formData.append("emotion", data.emotion);
  }
  if (data.variants?.length) {
    data.variants.forEach((v) => {
      formData.append("variants[]", v);
    });
  }

  if (data.avatar && data.avatar.length > 0) {
    formData.append("image", data.avatar[0]);
  }

  const response = await fetch(`${BASE_URL}/entries`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create entry");
  }

  return response.json();
}