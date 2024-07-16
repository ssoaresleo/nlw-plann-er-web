import { Link, TagIcon } from "lucide-react";
import { Button } from "../../../components/button";
import { FormEvent } from "react";
import { Modal } from "../../../components/modal";

interface CreateLinkModalProps {
  handleOpen: () => void;
  createLink: (event: FormEvent<HTMLFormElement>) => void;
  isOpen: boolean;
}

export function CreateLinkModal({
  handleOpen,
  createLink,
  isOpen,
}: CreateLinkModalProps) {
  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Content>
        <Modal.Header setIsOpen={handleOpen}>
          <Modal.Title>Cadastrar um link</Modal.Title>
          <Modal.Description>
            Todos os convidados podem ver os links
          </Modal.Description>
        </Modal.Header>

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
      </Modal.Content>
    </Modal.Root>
  );
}
