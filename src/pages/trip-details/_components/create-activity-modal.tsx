import { Modal } from "../../../components/modal";
import { Calendar, TagIcon } from "lucide-react";
import { Button } from "../../../components/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createActivity } from "../../../_api/create-activity";
import { queryClient } from "../../../lib/query";

const activitySchema = z.object({
  title: z.string(),
  occurs_at: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data e hora inválida",
  }),
});

type ActivitySchemaData = z.infer<typeof activitySchema>;

interface CreateActivityModalProps {
  handleOpen: () => void;
  isOpen: boolean;
  tripId: string;
}

export function CreateActivityModal({
  handleOpen,
  isOpen,
  tripId,
}: CreateActivityModalProps) {
  const { register, handleSubmit, reset } = useForm<ActivitySchemaData>({
    resolver: zodResolver(activitySchema),
  });

  const { mutateAsync: mutationCreateActivity } = useMutation({
    mutationFn: createActivity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  async function createNewActivity({ title, occurs_at }: ActivitySchemaData) {
    if (!title) return;
    if (!occurs_at) return;

    try {
      await mutationCreateActivity({
        title,
        occurs_at,
        tripId,
      });
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
          <Modal.Title>Cadastrar uma atividade</Modal.Title>
          <Modal.Description>
            Todos os convidados podem ver as atividades
          </Modal.Description>
        </Modal.Header>

        <form className="space-y-3" onSubmit={handleSubmit(createNewActivity)}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <TagIcon className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Qual a atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              {...register("title")}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                placeholder="Data e horário da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                {...register("occurs_at")}
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
