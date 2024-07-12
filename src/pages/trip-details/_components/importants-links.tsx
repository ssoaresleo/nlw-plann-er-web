import { Link2, Plus } from "lucide-react";

export function ImportantsLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://www.airbnb.com.br/rooms/104700011104700011104700011104700011104700011104700011
            </a>
          </div>
          <Link2 className="text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://www.airbnb.com.br/rooms/104700011104700011104700011104700011104700011104700011
            </a>
          </div>
          <Link2 className="text-zinc-400" />
        </div>
      </div>

      <button className="bg-zinc-800 w-full justify-center flex items-center gap-2 hover:bg-zinc-700 transition-all text-zinc-200 rounded-lg px-5 h-11 font-medium">
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
}
