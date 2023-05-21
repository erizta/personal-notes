import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();

  const note = notes.find((item) => item.id == id);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const navigate = useNavigate();
  const date = useCreateDate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newNotes = notes.filter((item) => item.id != id);

      setNotes(newNotes);
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
          className="hover:cursor-pointer hover:shadow-none bg-green-900 rounded-lg py-2 text-white  transition-all duration-300 px-4 lg:shadow-lg text-xl"
          onClick={handleForm}
        >
          Save
        </button>
        <button
          className="hover:shadow-none hover:cursor-pointer bg-red-700 rounded-lg py-2 text-white  transition-all duration-300 px-4 lg:shadow-lg text-lg"
          onClick={handleDelete}
        >
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleForm}>
        <input
          className="w-full px-2 py-4 text-2xl rounded-md text-white bg-transparent"
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
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

export default EditNote;
