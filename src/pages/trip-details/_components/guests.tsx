import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Leonardo Henrique
            </span>
            <a href="#" className="block text-sm text-zinc-400 truncate">
              leonardohenrique@gmail.com
            </a>
          </div>
          <CircleDashed className="text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Junior</span>
            <a href="#" className="block text-sm text-zinc-400 truncate">
              junior@gmail.com
            </a>
          </div>
          <CircleDashed className="text-zinc-400" />
        </div>
      </div>

      <button className="bg-zinc-800 w-full justify-center flex items-center gap-2 hover:bg-zinc-700 transition-all text-zinc-200 rounded-lg px-5 h-11 font-medium">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
