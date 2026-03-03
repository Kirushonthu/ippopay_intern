import React ,{useState}from "react";

function InputBar() {
        const [task,setTask]=useState("");
    function addTask() {
        // alert("task added")
      }
  return (
    
    <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl shadow-sm ">

      <input
        type="text"
        placeholder="Enter your task..."
        className="flex-1 p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <button 
      onClick={addTask}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 active:scale-95 transition duration-200">
        Add
      </button>

    </div>
    
  );
}


export default InputBar;