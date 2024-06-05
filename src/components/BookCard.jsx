import { useState } from "react";

export default function BookCard({ props }) {
  console.log(props);
  const [showAddBtn, setShowAddBtn] = useState(props.showAddBtn);
  function addToBookshelf() {
    const booksList = JSON.parse(localStorage.getItem("books")) || [];
    booksList.push({
      key: props.book.key,
      title: props.book.title,
      edition_count: props.book.edition_count,
    });
    localStorage.setItem("books", JSON.stringify(booksList));
    setShowAddBtn(false);
  }
  return (
    <>
      <div className="border p-5 max-w-96 rounded-md">
        <div>
          <p>
            <b>Book Title: </b>
            {props.book.title}
          </p>
          <p>
            <b>Edition Count: </b>
            {props.book.edition_count}
          </p>
        </div>
        {showAddBtn && (
          <div className="flex flex-row justify-center">
            <button
              onClick={addToBookshelf}
              className="px-3 py-2 mt-6 bg-black text-white text-center rounded-md text-sm"
            >
              Add to Bookshelf
            </button>
          </div>
        )}
      </div>
    </>
  );
}
