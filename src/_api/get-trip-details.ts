import { api } from "../lib/axios";

export interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

interface GetTripDetailsResponse {
  trip: Trip;
}

export async function getTripDetails({ tripId }: { tripId: string }) {
  const response = await api.get<GetTripDetailsResponse>(`/trips/${tripId}`);

  return response.data.trip;
}
