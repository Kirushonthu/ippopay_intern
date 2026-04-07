const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        About This App
      </h1>

      <p className="text-gray-600 mb-4">
        This is a full stack Notes application where users can create,
        update, and delete notes easily.
      </p>

      <h2 className="text-lg font-semibold mt-4">
        Tech Stack
      </h2>

      <ul className="list-disc ml-6 text-gray-600">
        <li>React (Frontend)</li>
        <li>Node.js & Express (Backend)</li>
        <li>MongoDB (Database)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">
        Developer
      </h2>

      <p className="text-gray-600">
        Built by Kishore 
      </p>

    </div>
  );
};

export default About;