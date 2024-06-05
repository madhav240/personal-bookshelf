import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-y-5">
        <Link
          to={"/search"}
          className="px-8 py-2 bg-black text-white text-center rounded-md"
        >
          Search
        </Link>
        <Link
          to={"/my-bookshelf"}
          className="px-8 py-2 bg-black text-white text-center rounded-md"
        >
          My Bookshelf
        </Link>
      </div>
    </div>
  );
}
