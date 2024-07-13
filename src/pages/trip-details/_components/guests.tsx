import { CheckCircle, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { useParams } from "react-router-dom";

interface ParticipantProps {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();

  const [participants, setParticipants] = useState<ParticipantProps[]>([]);

  console.log(participants);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants &&
          participants.map((participant, i) => (
            <div
              className="flex items-center justify-between gap-4"
              key={participant.id}
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {participant.name || `Convidado ${i}`}
                </span>
                <a href="#" className="block text-sm text-zinc-400 truncate">
                  {participant.email}
                </a>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle className="text-green-400 size-5" />
              ) : (
                <CircleDashed className="text-zinc-400 size-5" />
              )}
            </div>
          ))}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
