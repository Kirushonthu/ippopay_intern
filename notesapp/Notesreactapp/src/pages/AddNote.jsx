import { Link } from "react-router-dom";
import AddNote from "./Api/AddNote";

const Notes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          
          <h1 className="text-3xl font-bold text-gray-800">
            Notes
          </h1>

          <Link
            to="/notes"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm w-fit"
          >
            View All Notes
          </Link>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-6">
          Create and manage your notes efficiently. Stay organized and productive.
        </p>

        {/* CARD WRAPPER */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          
          <AddNote />

        </div>

      </div>

    </div>
  );
};

export default Notes;