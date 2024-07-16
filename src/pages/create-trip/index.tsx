import { FormEvent, useState } from "react";
import { InviteGuestsModal } from "./_components/invite-guests-modal";
import { ConfirmTripModal } from "./_components/confirm-trip-modal";
import { DestinationAndDateStep } from "./_components/steps/_components/destination-and-date-step";
import { InviteGuestsStep } from "./_components/steps/_components/invite-guests-step";
import { Terms } from "./_components/terms-footer";
import { DateRange } from "react-day-picker";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createTrip } from "../../_api/create-trip";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripOpen, setIsConfirmTripOpen] = useState(false);

  const [destination, setDestination] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");

  function handleOpenGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen);
  }

  function handleOpenGuestsModal() {
    setIsGuestsModalOpen(!isGuestsModalOpen);
  }

  function handleConfirmTripOpen() {
    setIsConfirmTripOpen(!isConfirmTripOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  const { mutateAsync: mutationCreateTrip } = useMutation({
    mutationFn: createTrip,
    onSuccess: (data) => {
      setTimeout(() => {
        navigate(`/trips/${data.tripId}`);
      }, 10000);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  async function createNewTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) return;
    if (!destination) return;
    if (!ownerName) return;
    if (!ownerEmail) return;

    try {
      await mutationCreateTrip({
        destination: destination,
        starts_at: eventStartAndEndDates?.from,
        ends_at: eventStartAndEndDates?.to,
        owner_name: ownerName,
        owner_email: ownerEmail,
        emails_to_invite: emailsToInvite,
      });
    } catch (err) {
      console.error(err);
    } finally {
      handleConfirmTripOpen();
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-patter bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            handleOpenGuestsInput={handleOpenGuestsInput}
            setDestination={setDestination}
            destination={destination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleConfirmTripOpen={handleConfirmTripOpen}
              handleOpenGuestsModal={handleOpenGuestsModal}
            />
          )}
        </div>

        <Terms />
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          handleOpenGuestsModal={handleOpenGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
          addNewEmailToInvite={addNewEmailToInvite}
        />
      )}

      {isConfirmTripOpen && (
        <ConfirmTripModal
          handleConfirmTripOpen={handleConfirmTripOpen}
          createTrip={createNewTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
}
