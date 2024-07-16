import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetails } from "./pages/trip-details";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";
import { ConfirmParticipants } from "./pages/confirm-participant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails />,
  },
  {
    path: "/participants/:id/confirm",
    element: <ConfirmParticipants />,
  }
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
