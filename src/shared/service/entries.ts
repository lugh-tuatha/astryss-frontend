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