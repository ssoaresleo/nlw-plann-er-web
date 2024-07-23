import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getTripDetails } from "../../../_api/get-trip-details";

export function HeaderDetailsTrip({
  handleUpdateTripModal,
}: {
  handleUpdateTripModal: () => void;
}) {
  const { tripId } = useParams();

  const { data: trip } = useQuery({
    queryKey: ["trip-details", tripId],
    queryFn: () => getTripDetails({ tripId: tripId || "" }),
  });

  const displayedDate = trip
    ? format(trip.starts_at, " d' de 'LLL")
        .concat(" até")
        .concat(format(trip.ends_at, " d' de 'LLL"))
    : null;

  const shortDateRange = trip
    ? format(trip.starts_at, "d")
        .concat(" até ")
        .concat(format(trip.ends_at, "d MMM"))
    : null;

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between border border-zinc-800">
      <div className="flex items-center gap-2 pr-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100 truncate">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100 hidden lg:inline">{displayedDate}</span>
          <span className="text-zinc-100 lg:hidden">{shortDateRange}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary" onClick={handleUpdateTripModal}>
          <span className="hidden lg:inline">Alterar local/data</span>
          <Settings2 className="size-5 flex-shrink-0" />
        </Button>
      </div>
    </div>
  );
}
