import { FormEvent } from "react";
import { Modal } from "../../../components/modal";
import { Calendar, TagIcon } from "lucide-react";
import { Button } from "../../../components/button";

interface CreateActivityModalProps {
  handleOpen: () => void;
  isOpen: boolean;
  createActivity: (event: FormEvent<HTMLFormElement>) => void;
}

export function CreateActivityModal({
  handleOpen,
  createActivity,
  isOpen,
}: CreateActivityModalProps) {
  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Content>
        <Modal.Header setIsOpen={handleOpen}>
          <Modal.Title>Cadastrar uma atividade</Modal.Title>
          <Modal.Description>
            Todos os convidados podem ver as atividades
          </Modal.Description>
        </Modal.Header>

        <form className="space-y-3" onSubmit={createActivity}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <TagIcon className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
