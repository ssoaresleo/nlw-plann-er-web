import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./_components/create-activity-modal";
import { ImportantsLinks } from "./_components/importants-links";
import { Guests } from "./_components/guests";
import { Activities } from "./_components/activities";
import { HeaderDetailsTrip } from "./_components/header-details-trip";
import { useParams } from "react-router-dom";
import { CreateLinkModal } from "./_components/create-link-modal";
import { Button } from "../../components/button";
import { UpdateTripModal } from "./_components/update-trip-modal";

export function TripDetails() {
  const { tripId } = useParams();

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  const [isUpdateTripModalOpen, setIsUpdateTripModalOpen] = useState(false);

  function handleOpentCreateLinkModal() {
    setIsCreateLinkModalOpen(!isCreateLinkModalOpen);
  }

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  function handleUpdateTripModal() {
    setIsUpdateTripModalOpen(!isUpdateTripModalOpen);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <HeaderDetailsTrip handleUpdateTripModal={handleUpdateTripModal} />

      <main className="flex md:flex-row flex-col gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={handleOpenCreateActivityModal}>
              <Plus className="size-5" />
              <span>Nova atividade</span>
            </Button>
          </div>

          <Activities />
        </div>

        <div className="md:w-80 space-y-6">
          <ImportantsLinks
            handleOpentCreateLinkModal={handleOpentCreateLinkModal}
          />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {tripId && isCreateActivityModalOpen && (
        <CreateActivityModal
          tripId={tripId}
          handleOpen={handleOpenCreateActivityModal}
          isOpen={isCreateActivityModalOpen}
        />
      )}

      {tripId && isCreateLinkModalOpen && (
        <CreateLinkModal
          tripId={tripId}
          handleOpen={handleOpentCreateLinkModal}
          isOpen={isCreateLinkModalOpen}
        />
      )}

      {tripId && isUpdateTripModalOpen && (
        <UpdateTripModal
          handleOpen={handleUpdateTripModal}
          isOpen={isUpdateTripModalOpen}
          tripId={tripId}
        />
      )}
    </div>
  );
}
