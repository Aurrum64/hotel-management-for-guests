import { Suspense } from "react";
import CabinList from "../_components/cabin-list";
import Spinner from "../_components/spinner";
import CabinFilter from "../_components/cabin-filter";

export const metadata = {
  title: "Cabins",
};

// Applicable only for Static Components, the searchParams usage converts the component into Dynamic
// export const revalidate = 3600;

export default function Cabins({ searchParams }: { searchParams: any }) {
  const capacity = searchParams?.capacity || "all";

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end py-6">
        <CabinFilter />
      </div>
      <Suspense fallback={<Spinner />} key={capacity}>
        <CabinList capacity={capacity} />
      </Suspense>
    </div>
  );
}
