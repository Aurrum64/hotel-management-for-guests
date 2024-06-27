// import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./cabin-card";
import { CabinCapacity } from "./cabin-filter";

export type CabinListProps = {
  capacity: CabinCapacity;
};

export default async function CabinList({ capacity }: CabinListProps) {
  // unstable_noStore();

  const cabins: any = await getCabins();

  if (!cabins.length) return null;

  let filteredCabins: any[] = cabins;

  if (capacity === "small") {
    filteredCabins = cabins.filter((cabin: any) => cabin.max_capacity <= 3);
  } else if (capacity === "medium") {
    filteredCabins = cabins.filter(
      (cabin: any) => cabin.max_capacity >= 4 && cabin.max_capacity <= 7,
    );
  } else if (capacity === "large") {
    filteredCabins = cabins.filter((cabin: any) => cabin.max_capacity >= 8);
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin: any) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
