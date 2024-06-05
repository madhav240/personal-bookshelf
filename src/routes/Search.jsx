import { useCallback, useEffect, useRef, useState } from "react";
import BookCard from "../components/BookCard";

function useDebounce(effect, dependencies, delay) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export default function Search() {
  const [q, setQ] = useState("");
  const [books, setBooks] = useState([]);
  const booksListElmRef = useRef();
  const loadingElmRef = useRef();

  var addedBooksKeys = JSON.parse(localStorage.getItem("books")) || [];
  addedBooksKeys = addedBooksKeys.map((book) => book.key);
  console.log(addedBooksKeys);

  useDebounce(
    async () => {
      if (q.trim()) {
        booksListElmRef.current.style.display = "none";
        loadingElmRef.current.style.display = "inline-block";

        const res = await fetch(
          `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
        );
        const data = await res.json();
        setBooks(data.docs);

        booksListElmRef.current.style.display = "block";
        loadingElmRef.current.style.display = "none";
      }
    },
    [q],
    800
  );
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">Search by Book Name</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQ(e.target.value)}
          value={q}
          spellCheck={false}
          autoFocus
          className="p-2 outline-none border mt-2"
        />

        <div ref={booksListElmRef} className="hidden">
          {books.length > 0 ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
              {books.map((book, index) => (
                <BookCard
                  props={{
                    book,
                    showAddBtn: !addedBooksKeys.includes(book.key),
                  }}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <p className="text-red-500 text-center mt-4">No search results!</p>
          )}
        </div>

        <span ref={loadingElmRef} className="hidden mt-4">
          Loading...
        </span>
      </div>
    </>
  );
}
