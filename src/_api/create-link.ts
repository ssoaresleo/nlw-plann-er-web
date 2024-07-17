import { api } from "../lib/axios";

interface CreateLinkRequest {
  title: string;
  url: string;
  tripId: string;
}

export async function createLink({
  title,
  url,
  tripId,
}: CreateLinkRequest) {
  const response = await api.post(`/trips/${tripId}/links`, {
    title,
    url,
  });

  return response.data;
}
