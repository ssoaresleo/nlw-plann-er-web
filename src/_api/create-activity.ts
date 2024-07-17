import { api } from "../lib/axios";

interface CreateActivityRequest {
  title: string;
  occurs_at: string;
  tripId: string;
}

export async function createActivity({
  title,
  occurs_at,
  tripId,
}: CreateActivityRequest) {
  const response = await api.post(`/trips/${tripId}/activities`, {
    title,
    occurs_at,
  });

  return response.data;
}
