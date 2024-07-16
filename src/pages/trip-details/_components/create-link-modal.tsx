import { Link, TagIcon, X } from "lucide-react";
import { Button } from "../../../components/button";
import { FormEvent } from "react";

interface CreateLinkModalProps {
  handleOpenCreateLinkModal: () => void;
  createLink: (event: FormEvent<HTMLFormElement>) => void;
}

export function CreateLinkModal({
  handleOpenCreateLinkModal,
  createLink,
}: CreateLinkModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button onClick={handleOpenCreateLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem ver os links
          </p>
        </div>

        <form className="space-y-3" onSubmit={createLink}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <TagIcon className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Assunto do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link className="text-zinc-400 size-5" />
            <input
              type="text"
              name="url"
              placeholder="Url"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button type="submit" size="full">
            Criar link
          </Button>
        </form>
      </div>
    </div>
  );
}
