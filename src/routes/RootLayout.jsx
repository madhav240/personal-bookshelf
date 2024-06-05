import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav className="mt-2 w-fit bg-white left-0 right-0 mx-auto space-x-4 top-0">
        <Link
          to={"/"}
          className="bg-black text-white text-lg rounded-lg px-6 py-2 hover:underline"
        >
          Home
        </Link>
        <Link
          to={"/my-bookshelf"}
          className="bg-black text-white text-lg rounded-lg px-6 py-2 hover:underline"
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
