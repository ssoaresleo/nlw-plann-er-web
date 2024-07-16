import { api } from "../lib/axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
  trip_id: string;
}

interface GetParticipantResponse {
  participant: Participant;
}

export async function getParticipant({ participantId }: { participantId: string }) {
  const response = await api.get<GetParticipantResponse>(
    `/participants/${participantId}`
  );

  return response.data.participant;
}
