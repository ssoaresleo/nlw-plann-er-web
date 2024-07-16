import { FormEvent, useState } from "react";
import { InviteGuestsModal } from "./_components/invite-guests-modal";
import { ConfirmTripModal } from "./_components/confirm-trip-modal";
import { DestinationAndDateStep } from "./_components/steps/_components/destination-and-date-step";
import { InviteGuestsStep } from "./_components/steps/_components/invite-guests-step";
import { Terms } from "./_components/terms-footer";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripOpen, setIsConfirmTripOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

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

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(destination);
    console.log(ownerName);
    console.log(ownerEmail);
    console.log(eventStartAndEndDates);
    console.log(emailsToInvite);

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) return;
    if (!destination) return;
    if (!ownerName) return;
    if (!ownerEmail) return;

    await api.post("/trips", {
      destination: destination,
      starts_at: eventStartAndEndDates?.from,
      ends_at: eventStartAndEndDates?.to,
      owner_name: ownerName,
      owner_email: ownerEmail,
      emails_to_invite: emailsToInvite,
    });
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
          {/* input de destino e data Passo 1 */}
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            handleOpenGuestsInput={handleOpenGuestsInput}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />

          {/* input de adicionar participants Passo 2 */}
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

      {/* modal para adicionar participantes */}
      {isGuestsModalOpen && (
        <InviteGuestsModal
          handleOpenGuestsModal={handleOpenGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
          addNewEmailToInvite={addNewEmailToInvite}
        />
      )}

      {/* modal para confirmar a criação da viagem */}
      {isConfirmTripOpen && (
        <ConfirmTripModal
          handleConfirmTripOpen={handleConfirmTripOpen}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
}
