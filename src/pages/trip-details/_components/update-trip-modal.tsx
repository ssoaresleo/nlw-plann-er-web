import { Calendar, MapPin, X } from "lucide-react";
import { Modal } from "../../../components/modal";
import { DateRange, DayPicker } from "react-day-picker";
import { FormEvent, useState } from "react";
import { format } from "date-fns";
import { Button } from "../../../components/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateTrip } from "../../../_api/update-trip";
import { getTripDetails } from "../../../_api/get-trip-details";

interface UpdateTripModalProps {
  tripId: string;
  isOpen: boolean;
  handleOpen: () => void;
}

export function UpdateTripModal({
  handleOpen,
  isOpen,
  tripId,
}: UpdateTripModalProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >(undefined);

  const [destination, setDestination] = useState("");

  function handleOpenDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen);
  }

  const { mutateAsync: mutationUpdateTrip } = useMutation({
    mutationFn: updateTrip,
  });

  const { data: tripData } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => getTripDetails({ tripId }),
    enabled: !!isOpen && !!tripId
  });

  if (tripData && !destination && !eventStartAndEndDates) {
    setDestination(tripData.destination);
    setEventStartAndEndDates({
      from: new Date(tripData.starts_at),
      to: new Date(tripData.ends_at),
    });
  }

  async function updateTripDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) return;
    if (!destination) return;

    try {
      await mutationUpdateTrip({
        tripId: tripId,
        destination: destination,
        starts_at: eventStartAndEndDates?.from,
        ends_at: eventStartAndEndDates?.to,
      });
    } catch (err) {
      console.error(err);
    } finally {
      handleOpen();
    }
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, " d' de 'LLL")
          .concat(" até")
          .concat(format(eventStartAndEndDates.to, " d' de 'LLL"))
      : null;

  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Content>
        <Modal.Header setIsOpen={handleOpen}>
          <Modal.Title>Editar viagem</Modal.Title>
          <Modal.Description>Edite os dados da viagem</Modal.Description>
        </Modal.Header>

        <form className="space-y-3" onSubmit={updateTripDetails}>
          <div className="flex items-center gap-2 flex-1 w-full py-4">
            <MapPin className="size-5 text-zinc-400" />

            <input
              type="text"
              name="destination"
              placeholder="Para onde você vai?"
              value={destination}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setDestination(event.target.value)}
            />
          </div>

          <button
            className="flex items-center gap-2 text-left w-[240px] py-4"
            type="button"
            onClick={handleOpenDatePicker}
          >
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-lg text-zinc-400 w-40 flex-1">
              {displayedDate || "Quando?"}
            </span>
          </button>

          {isDatePickerOpen && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
              <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Selecione a data</h2>
                    <button onClick={handleOpenDatePicker}>
                      <X className="size-5 text-zinc-400" />
                    </button>
                  </div>
                </div>
                <DayPicker
                  mode="range"
                  selected={eventStartAndEndDates}
                  onSelect={setEventStartAndEndDates}
                />
              </div>
            </div>
          )}
          <Button size="full" type="submit">
            Confirmar Mudanças
          </Button>
        </form>
      </Modal.Content>
    </Modal.Root>
  );
}
