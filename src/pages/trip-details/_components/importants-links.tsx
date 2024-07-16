import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";

interface Link {
  id: string;
  title: string;
  url: string;
}

interface ImportantsLinksProps {
  handleOpentCreateLinkModal: () => void;
}

export function ImportantsLinks({
  handleOpentCreateLinkModal,
}: ImportantsLinksProps) {
  const { tripId } = useParams();

  const [links, setLinks] = useState<Link[] | undefined>(undefined);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {links?.length &&
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
                  href="#"
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
