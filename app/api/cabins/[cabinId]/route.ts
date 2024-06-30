import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

export async function GET(request: any, { params }: { params: any }) {
  try {
    const [settings, bookedDates] = await Promise.all([
      getSettings(),
      getBookedDatesByCabinId(params.cabinId),
    ]);
    return Response.json({ settings, bookedDates });
  } catch {
    return Response.json({ text: "Something went wrong." });
  }
}
