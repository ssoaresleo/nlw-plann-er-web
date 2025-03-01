import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../../../components/button";

interface InviteGuestsStep {
  handleOpenGuestsModal: () => void;
  handleConfirmTripOpen: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  handleOpenGuestsModal,
  emailsToInvite,
  handleConfirmTripOpen,
}: InviteGuestsStep) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 group">
      <button
        type="button"
        className="flex items-center gap-2 flex-1 text-left text-zinc-400 group-hover:text-zinc-50 transition-all"
        onClick={handleOpenGuestsModal}
      >
        <UserRoundPlus className="size-5" />
        {emailsToInvite.length ? (
          <span className="text-lg flex-1">
            {emailsToInvite.length} pessoa{"(s)"} convidada{"(s)"}
          </span>
        ) : (
          <span className="text-lg flex-1">Quem estará na viagem?</span>
        )}
      </button>

      <Button onClick={handleConfirmTripOpen}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
