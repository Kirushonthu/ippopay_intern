import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3047/notes")
      .then(res => res.json())
      .then(data => setCount(data.data.length));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Organize Your Thoughts !
          </h1>

          <p className="text-gray-600 mb-6">
            Create, manage, and access your notes anytime, anywhere.
          </p>

          <Link
            to="/notes"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>

        {/* STATS + FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* TOTAL NOTES */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h2 className="text-lg text-gray-600">Total Notes</h2>
            <p className="text-3xl font-bold text-blue-500 mt-2">
              {count}
            </p>
          </div>

          {/* FEATURE 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h2 className="text-lg text-gray-600">Fast & Simple</h2>
            <p className="text-sm text-gray-500 mt-2">
              Quickly add and manage your notes without complexity.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h2 className="text-lg text-gray-600">Secure</h2>
            <p className="text-sm text-gray-500 mt-2">
              Your notes are Secured and stored safely.
            </p>
          </div>

        </div>

        {/* EXTRA CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/addnote"
            className="text-blue-500 font-medium hover:underline"
          >
            Start writing your first note →
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Home;