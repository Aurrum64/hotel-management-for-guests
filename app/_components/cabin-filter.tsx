"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export enum CabinCapacity {
  Small = "small",
  Medium = "medium",
  Large = "large",
  All = "all",
}

export default function CabinFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();

  function handleClick(capacity: CabinCapacity) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", capacity);
    route.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleClick(CabinCapacity.All)}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleClick(CabinCapacity.Small)}
      >
        1 to 3 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleClick(CabinCapacity.Medium)}
      >
        4 to 7 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleClick(CabinCapacity.Large)}
      >
        8 to 12 Guests
      </button>
    </div>
  );
}
