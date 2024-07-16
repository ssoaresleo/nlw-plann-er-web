import { api } from "../lib/axios";

interface Link {
  id: string;
  title: string;
  url: string;
}

interface GetLinksResponse {
  links: Link[];
}

export async function getImportantsLinks({ tripId }: { tripId: string }) {
  const response = await api.get<GetLinksResponse>(`/trips/${tripId}/links`);

  return response.data.links;
}
