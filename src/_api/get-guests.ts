import { api } from "../lib/axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

interface GetGuestsResponse {
  participants: Participant[];
}

export async function getGuests({ tripId }: { tripId: string }) {
  const response = await api.get<GetGuestsResponse>(
    `/trips/${tripId}/participants`
  );

  return response.data.participants;
}
