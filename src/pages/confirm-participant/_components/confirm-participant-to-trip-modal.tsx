import { FormEvent } from "react";
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";
import { User } from "lucide-react";
import { format } from "date-fns";
import { Trip } from "../../../_api/get-trip-details";

interface ConfirmParticipantToTripModalProps {
  handleOpen: () => void;
  isOpen: boolean;
  confirmParticipant: (event: FormEvent<HTMLFormElement>) => void;
  tripDetails: Trip;
}

export function ConfirmParticipantToTripModal({
  isOpen,
  confirmParticipant,
  handleOpen,
  tripDetails,
}: ConfirmParticipantToTripModalProps) {
  const displayedDate = tripDetails
    ? format(tripDetails.starts_at, " d' de 'LLL")
        .concat(" até")
        .concat(format(tripDetails.ends_at, " d' de 'LLL"))
    : null;

  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Content>
        <Modal.Header setIsOpen={handleOpen}>
          <Modal.Title>Confirmar participação</Modal.Title>
          <Modal.Description>
            Você foi convidado(a) para participar de uma viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              {tripDetails.destination}
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">{displayedDate}</span>
            <br />
            Para confirmar sua presença na viagem, preencha os dados abaixo:
          </Modal.Description>
        </Modal.Header>

        <form className="space-y-3" onSubmit={confirmParticipant}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Qual o seu nome"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" size="full">
            Confirmar minha presença
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
