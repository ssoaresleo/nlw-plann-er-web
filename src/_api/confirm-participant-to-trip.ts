import { api } from "../lib/axios";

interface ConfirmParticipantRequest {
  name: string;
  participantId: string;
}

export async function confirmParticipantToTrip({
  name,
  participantId,
}: ConfirmParticipantRequest) {
  await api.post(`/participants/${participantId}/confirm`, {
    name,
  });
}
