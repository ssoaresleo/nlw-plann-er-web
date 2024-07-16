import { api } from "../lib/axios";

interface CreateTripRequest {
  destination: string;
  starts_at: Date;
  ends_at: Date;
  emails_to_invite: string[];
  owner_name: string;
  owner_email: string;
}

interface CreateTripResponse {
  tripId: string;
}

export async function createTrip({
  destination,
  starts_at,
  ends_at,
  emails_to_invite,
  owner_name,
  owner_email,
}: CreateTripRequest) {
  const response = await api.post<CreateTripResponse>("/trips", {
    destination,
    starts_at,
    ends_at,
    emails_to_invite,
    owner_name,
    owner_email,
  });

  return response.data;
}
