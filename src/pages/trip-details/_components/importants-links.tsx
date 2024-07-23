import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getImportantsLinks } from "../../../_api/get-importants-links";

interface ImportantsLinksProps {
  handleOpentCreateLinkModal: () => void;
}

export function ImportantsLinks({
  handleOpentCreateLinkModal,
}: ImportantsLinksProps) {
  const { tripId } = useParams();

  const { data: links } = useQuery({
    queryKey: ["important-links", tripId],
    queryFn: () => getImportantsLinks({ tripId: tripId || "" }),
  });

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {!links?.length && (
          <p className="block text-sm text-zinc-400">Não a nenhum link registrado nessa viagem.</p>
        )}
        {links &&
          links.map((link) => (
            <div
              className="flex items-center justify-between gap-4"
              key={link.id}
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href={link.url}
                  className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400" />
            </div>
          ))}
      </div>

      <Button
        variant="secondary"
        size="full"
        onClick={handleOpentCreateLinkModal}
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
