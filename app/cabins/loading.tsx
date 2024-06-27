import Spinner from "../_components/spinner";

const Loading = () => (
  <div className="flex flex-col items-center justify-center">
    <Spinner />
    Loading cabins data...
  </div>
);

export default Loading;
