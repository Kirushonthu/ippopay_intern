import React, { useEffect, useState } from "react";
// import { FaTrash, FaEdit } from "react-icons/fa";

const Data = () => {
    // const [notes, setNotes] = useState([]);
    const [type, setType] = useState("");
    const [content, setContent] = useState("");
    // const [isOpen, setIsOpen] = useState(false);
    // const [editId, setEditId] = useState(null);


    const adddata = async (e) => {
        try {
            e.preventDefault();

            await fetch("http://localhost:3047/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ type, content }),
            });

            setType("");
            setContent("");
            fetchNotes();
        } catch (error) {
            console.error('Failed to post data:', error);
        }
    };



    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">

            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Add a Note
            </h1>

            {/* ADD FORM */}
            <div className="max-w-xl mx-auto bg-white p-5 rounded-2xl shadow-md mb-8">
                <form onSubmit={adddata} className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border p-3 rounded-lg"
                        required
                    />

                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-3 rounded-lg"
                        required
                    />

                    <button className="bg-blue-500 text-white py-2 rounded-lg">
                        Add Note
                    </button>
                </form>
            </div>




        </div>
    );
};

export default Data;