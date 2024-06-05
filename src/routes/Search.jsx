import { useCallback, useEffect, useState } from "react";
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

  const addedBooksList = JSON.parse(localStorage.getItem("books")) || [];

  useDebounce(
    async () => {
      if (q.trim()) {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
        );

        const data = await res.json();
        setBooks(data.docs);
        console.log(data);
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
          value={q.trim() ? q : ""}
          spellCheck={false}
          autoFocus
          className="p-2 outline-none border mt-2"
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 ">
          {books.map((book, index) => (
            <BookCard
              props={{ book, showAddBtn: !addedBooksList.includes(book.key) }}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
