import React from "react";
import useToggle from "./components/useToggle";

const App = () => {
  const [value, toggleValue] = useToggle(false);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="space-x-4 mb-8">
        <button 
          onClick={toggleValue}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Toggle Heading
        </button>
        <button 
          onClick={() => toggleValue(false)}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Hide Heading
        </button>
        <button 
          onClick={() => toggleValue(true)}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Show Heading
        </button>
      </div>
      
      {value && (
        <h1 className="text-4xl font-bold text-amber-500 mb-4 animate-fade-in">
          Hello Prashant Singh Rajput
        </h1>
      )}
    </div>
  );
};

export default App;