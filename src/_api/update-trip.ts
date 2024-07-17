import { api } from "../lib/axios";

interface UpdateTripRequest {
  tripId: string;
  destination: string;
  starts_at: Date;
  ends_at: Date;
}

interface UpdateTripResponse {
  tripId: string;
}

export async function updateTrip({
  destination,
  starts_at,
  ends_at,
  tripId,
}: UpdateTripRequest) {
  const response = await api.put<UpdateTripResponse>(`/trips/${tripId}`, {
    destination,
    starts_at,
    ends_at,
  });

  return response.data;
}
