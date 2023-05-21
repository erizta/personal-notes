import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();
  const date = useCreateDate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };
      setNotes((prevNotes) => [note, ...prevNotes]);
      console.log(note);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="flex justify-between items-center">
        <Link
          to="/"
          className="bg-gray-700 rounded-lg text-white  transition-all duration-300 p-3 lg:shadow-lg text-xl"
        >
          <IoIosArrowBack />
        </Link>
        <button
          className="hover:cursor-pointer bg-green-900 rounded-lg py-2 text-white transition-all duration-300 px-4 lg:shadow-lg text-"lg
          onClick={handleSubmit}
        >
          Save
        </button>
      </header>
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
        <input
          className="w-full px-2 py-4 text-2xl rounded-md text-white bg-transparent"
          type="text"
          placeholder="Title"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full px-2 py-4 text-base rounded-md text-white bg-transparent"
          rows={28}
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
