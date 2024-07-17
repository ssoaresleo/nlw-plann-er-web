import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined;
  destination: string;
  handleOpenGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  handleOpenGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
  destination,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function handleOpenDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen);
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, " d' de 'LLL")
          .concat(" até")
          .concat(format(eventStartAndEndDates.to, " d' de 'LLL"))
      : null;

  const isDestinationAndDate =
    destination.trim() !== "" && eventStartAndEndDates !== undefined;

  return (
    <div className="lg:h-16 h-auto lg:py-0 py-4 bg-zinc-900 px-4 rounded-xl flex lg:flex-row flex-col lg:items-center items-start shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1 w-full lg:py-0 py-4">
        <MapPin className="size-5 text-zinc-400" />

        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
          disabled={isGuestsInputOpen}
        />
      </div>

      <button
        onClick={handleOpenDatePicker}
        className="flex items-center gap-2 text-left w-[240px] lg:py-0 py-4"
        disabled={isGuestsInputOpen}
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

      <div className="lg:w-px lg:h-6 h-px w-6 bg-zinc-800 lg:mx-0 mx-auto" />

      {isGuestsInputOpen ? (
        <Button
          variant="secondary"
          onClick={handleOpenGuestsInput}
          size="responsive"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button
          onClick={handleOpenGuestsInput}
          disabled={!isDestinationAndDate}
        >
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
