import { api } from "../lib/axios";

interface Activity {
  date: string;
  activities: { id: string; title: string; occurs_at: string }[];
}

interface GetActivitiesResponse {
  activities: Activity[];
}

export async function getActivities({ tripId }: { tripId: string }) {
  const response = await api.get<GetActivitiesResponse>(
    `/trips/${tripId}/activities`
  );

  return response.data.activities;
}
