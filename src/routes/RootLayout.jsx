import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav className="mt-2 w-fit bg-white left-0 right-0 mx-auto space-x-6 top-0 border px-6 py-2">
        <Link to={"/"} className="text-blue-600 underline hover:text-black">
          Home
        </Link>
        <Link
          to={"/search"}
          className="text-blue-600 underline hover:text-black"
        >
          Search
        </Link>
        <Link
          to={"/my-bookshelf"}
          className="text-blue-600 underline hover:text-black"
        >
          My Bookshelf
        </Link>
      </nav>

      <div className="mt-12">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;