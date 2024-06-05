import BookCard from "../components/BookCard";

export default function MyBookshelf() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  return (
    <>
      <h1 className="text-center font-bold"> My Bookshelf</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 ">
        {books.map((book, index) => (
          <BookCard props={{ book, showAddBtn: false }} key={index} />
        ))}
      </div>
    </>
  );
}
