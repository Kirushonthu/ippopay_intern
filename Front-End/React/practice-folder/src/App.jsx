import InputBar from "./InputBar";
import Taskbar from "./Taskbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-700 mb-2">
            Todo App
          </h1>
          <p className="text-gray-500">
            Keep track of your tasks efficiently
          </p>
        </div>

        {/* Input Section */}
        <InputBar />

        {/* Task List */}
        <div className="mt-6">
          <Taskbar />
        </div>

      </div>
    </div>
  );
}

export default App;