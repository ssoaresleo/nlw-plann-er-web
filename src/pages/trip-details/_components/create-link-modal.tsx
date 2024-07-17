import { Link, TagIcon } from "lucide-react";
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../lib/query";
import { createLink } from "../../../_api/create-link";

const linkSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

type LinkSchemaData = z.infer<typeof linkSchema>;

interface CreateLinkModalProps {
  handleOpen: () => void;
  isOpen: boolean;
  tripId: string;
}

export function CreateLinkModal({
  handleOpen,
  isOpen,
  tripId,
}: CreateLinkModalProps) {
  const { register, handleSubmit, reset } = useForm<LinkSchemaData>({
    resolver: zodResolver(linkSchema),
  });

  const { mutateAsync: mutationCreateLink } = useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["important-links"] });
    },
  });

  async function createNewLink({ title, url }: LinkSchemaData) {
    if (!title) return;
    if (!url) return;

    try {
      await mutationCreateLink({ title, url, tripId });
    } catch (err) {
      console.log(err);
    } finally {
      reset();
      handleOpen();
    }
  }

  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Content>
        <Modal.Header setIsOpen={handleOpen}>
          <Modal.Title>Cadastrar um link</Modal.Title>
          <Modal.Description>
            Todos os convidados podem ver os links
          </Modal.Description>
        </Modal.Header>

        <form className="space-y-3" onSubmit={handleSubmit(createNewLink)}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <TagIcon className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Assunto do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              {...register("title")}
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Url"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              {...register("url")}
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
