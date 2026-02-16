import React, { useEffect, useState } from "react";
import axios from "axios";

function Recipe() {

  const [user, setUsers] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setUsers(response.data.recipes);
        console.log("recipes successfull")
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchdata();
  }, []);


  return (
    <div className="min-h-screen p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Cards
      </h1>

      {/* <div className="text-right mb-6">
        <button
        onClick={filter()}
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl rounded px-4 py-2.5 shadow-md transition"
        >
          Filter
        </button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {user.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden" >
            <img
              src={recipe.imag}
              alt={recipe.name}
              className="w-full object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {recipe.name}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Rating: {recipe.rating}
              </p>

              <p>
                Cuisine: {recipe.cuisine}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Recipe;
