import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";

import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(() => {
    handleSearch();
  }, [text]);

  return (
    <section>
      <header className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-900 z-10">
        {!showSearch && <h2 className="text-yellow-400">My Notes</h2>}
        {showSearch && (
          <input
            className="p-2.5 bg-transparent border border-solid border-gray-900 rounded-md text-white text-lg w-full mr-6"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="Keyword"
          />
        )}
        <button
          className="hover:shadow-none hover:cursor-pointer bg-gray-900 rounded-lg p-2 text-white text-lg shadow-md transition-all duration-300 lg:px-4 lg:py-2 lg:shadow-lg"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="grid grid-cols-2 my-3">
        {filteredNotes.length === 0 && (
          <p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Notes not found
          </p>
        )}
        {filteredNotes.map((note, id) => (
          <NoteItem key={id} note={note} />
        ))}
      </div>
      <Link
        to="/create-note"
        className=" fixed bottom-16 right-28 bg-gray-900 rounded-lg p-4 text-white text-lg shadow-md transition-all duration-300"
      >
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
