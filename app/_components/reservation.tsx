import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./date-selector";
import ReservationForm from "./reservation-form";

export default async function Reservation({ cabin }: { cabin: any }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid min-h-[400px] grid-cols-2 border-primary-800">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
