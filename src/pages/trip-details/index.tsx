import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./_components/create-activity-modal";
import { ImportantsLinks } from "./_components/importants-links";
import { Guests } from "./_components/guests";
import { Activities } from "./_components/activities";
import { HeaderDetailsTrip } from "./_components/header-details-trip";

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function handleOpenCreateActivityModal() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  function createActivity() {}

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <HeaderDetailsTrip />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={handleOpenCreateActivityModal}
              className="bg-lime-300 flex items-center gap-2 hover:bg-lime-400 transition-all text-lime-950 rounded-lg px-5 py-2 font-medium"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantsLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {/* Modal de criação de uma atividade */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          createActivity={createActivity}
          handleOpenCreateActivityModal={handleOpenCreateActivityModal}
        />
      )}
    </div>
  );
}
