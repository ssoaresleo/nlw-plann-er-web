import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  handleOpenGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  handleOpenGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />

        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button
          className="bg-zinc-800 flex items-center gap-2 hover:bg-zinc-700 transition-all text-zinc-200 rounded-lg px-5 py-2 font-medium"
          onClick={handleOpenGuestsInput}
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          className="bg-lime-300 flex items-center gap-2 hover:bg-lime-400 transition-all text-lime-950 rounded-lg px-5 py-2 font-medium"
          onClick={handleOpenGuestsInput}
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
