import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <div className={`note ${note.title.length > 50 || note.details.length > 100 ? 'note-long' : ''}`}>
      <Link to={`/edit-note/${note.id}`} className="bg-[#3d3f31] p-4 flex flex-col gap-4 cursor-pointer transition-all duration-300 text-white text-sm hover:opacity-90 rounded-xl">
        <h4>{note.title.length > 50 ? note.title.substr(0, 50) + "..." : note.title}</h4>
        <p className="text-xs font-thin">{note.date}</p>
      </Link>
    </div>
  );
};

export default NoteItem;
