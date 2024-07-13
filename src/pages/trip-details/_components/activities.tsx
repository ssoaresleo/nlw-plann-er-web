import { CircleCheck } from "lucide-react";
import { api } from "../../../lib/axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";

setDefaultOptions({ locale: ptBR });

interface Activity {
  date: string;
  activities: { id: string; title: string; occurs_at: string }[];
}

export function Activities() {
  const { tripId } = useParams();

  const [activities, setActivities] = useState<Activity[]>([]);

  console.log(activities);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((activity, index) => {
        return (
          <div className="space-y-2.5" key={`Atividade ${index}`}>
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300 font-semibold">
                {format(activity.date, "dd")}
              </span>
              <span className="text-sm text-zinc-500">
                {format(activity.date, "eeee")}
              </span>
            </div>

            {activity.activities.length > 0 ? (
              <Fragment>
                {activity.activities.map((activityday) => (
                  <div
                    className="px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-3"
                    key={activityday.id}
                  >
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activityday.title}</span>
                    <span className="text-zinc-400 text-sm ml-auto">
                      {format(activityday.occurs_at, "HH:mm")}h
                    </span>
                  </div>
                ))}
              </Fragment>
            ) : (
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
