import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Fetch = () => {
  const [notes, setNotes] = useState([]);
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ ONLY ONE useEffect (fixed)
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      fetchNotes();
    }
  }, []);

  // ✅ FETCH NOTES
  const fetchNotes = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3047/notes", {
        headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        console.log(result.message);
        return;
      }

      setNotes(result.data || []);

    } catch (error) {
      console.error("Failed to Fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ DELETE NOTE
  const deleteItem = async (id) => {
    try {
      await fetch(`http://localhost:3047/notes/${id}`, {
        method: "DELETE",
        headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      fetchNotes(); // safer refresh

    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  // ✅ OPEN EDIT
  const openEdit = (note) => {
    setEditId(note._id);
    setType(note.type);
    setContent(note.content);
    setIsOpen(true);
  };

  // ✅ UPDATE NOTE
  const EditItem = async () => {
    try {
      await fetch(`http://localhost:3047/notes/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ type, content }),
      });

      setIsOpen(false);
      setType("");
      setContent("");
      setEditId(null);

      fetchNotes();

    } catch (error) {
      console.error("Failed to Edit:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            My Notes
          </h1>

          <Link
            to="/addnote"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            + Add Note
          </Link>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {/* EMPTY STATE */}
        {!loading && notes.length === 0 && (
          <p className="text-center text-gray-500">
            No notes yet. Start by adding one
          </p>
        )}

        {/* NOTES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
            >
              {/* ACTIONS */}
              <div className="flex justify-end gap-3 mb-2">
                <FaEdit
                  onClick={() => openEdit(note)}
                  className="cursor-pointer text-gray-400 hover:text-blue-500"
                />

                <FaTrash
                  onClick={() => deleteItem(note._id)}
                  className="cursor-pointer text-gray-400 hover:text-red-500"
                />
              </div>

              {/* CONTENT */}
              <h3 className="text-blue-500 font-semibold mb-1">
                {note.type}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-3">
                {note.content}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* EDIT MODAL */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">

            <h2 className="text-lg font-semibold mb-3">
              Edit Note
            </h2>

            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border p-2 w-full mb-3 rounded"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 w-full mb-3 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                Cancel
              </button>

              <button
                onClick={EditItem}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Update
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Fetch;