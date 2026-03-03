import React from "react";

function Taskbar() {
  return (
    <div className="mt-6">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Your Tasks
        </h2>

        <div className="flex gap-3 text-sm">
          <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
            All
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
            Active
          </button>
          <button className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
            Completed
          </button>
        </div>
      </div>

    
      <div className="bg-gray-50 border rounded-xl p-20 text-center text-gray-500">
        No tasks yet. Add one above 
      </div>

    </div>
  );
}

export default Taskbar;