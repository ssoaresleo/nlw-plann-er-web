import { useNavigate, useParams } from "react-router-dom";
import { ConfirmParticipantToTripModal } from "./_components/confirm-participant-to-trip-modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTripDetails } from "../../_api/get-trip-details";
import { getParticipant } from "../../_api/get-participant";
import { FormEvent, useState } from "react";
import { confirmParticipantToTrip } from "../../_api/confirm-participant-to-trip";

export function ConfirmParticipants() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isconfirmParticipantModalOpen, setIsConfirmParticipantModalOpen] =
    useState(false);

  function handleOpenIsConfirmParticipantModalOpen() {
    setIsConfirmParticipantModalOpen(!isconfirmParticipantModalOpen);
  }

  const { data: participant } = useQuery({
    queryKey: ["participant", id],
    queryFn: () => getParticipant({ participantId: id || "" }),
    enabled: !!id,
  });

  const { data: trip } = useQuery({
    queryKey: ["confirm-trip-details", participant?.id],
    queryFn: () => getTripDetails({ tripId: participant?.trip_id || "" }),
    enabled: !!participant?.id,
  });

  const { mutateAsync: confirm } = useMutation({
    mutationFn: confirmParticipantToTrip,
  });

  async function confirmParticipant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString();

    if (!name) return;
    if (!id) return;

    await confirm({
      name,
      participantId: id,
    });

    handleOpenIsConfirmParticipantModalOpen();

    navigate(`/trips/${trip?.id}`);
  }

  return (
    <>
      {trip && (
        <ConfirmParticipantToTripModal
          isOpen={true}
          tripDetails={trip}
          confirmParticipant={confirmParticipant}
          handleOpen={handleOpenIsConfirmParticipantModalOpen}
        />
      )}
    </>
  );
}
