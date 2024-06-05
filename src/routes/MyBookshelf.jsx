import BookCard from "../components/BookCard";

export default function MyBookshelf() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  return (
    <>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
        {books.map((book, index) => (
          <BookCard props={{ book, showAddBtn: false }} key={index} />
        ))}
      </div>
    </>
  );
}
