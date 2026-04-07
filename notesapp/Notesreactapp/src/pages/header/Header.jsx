import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <h2 className="text-2xl font-bold text-blue-600">
          NotesApp
        </h2>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/notes" 
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            Notes
          </NavLink>

           <NavLink 
            to="/addnote" 
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            AddNote
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
            }
          >
            About
          </NavLink>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* <input
            type="text"
            placeholder="Search..."
            className="hidden sm:block w-48 md:w-64 border px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          /> */}

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
              MD
            </div>

            <p className="hidden sm:block text-sm font-medium">
              Monkey D Luffy
            </p>
          </div>

          <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition text-sm">
            Logout
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;  