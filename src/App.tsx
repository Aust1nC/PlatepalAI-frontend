import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react";

const ProfileSelector = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg pt-2">
      <div className="relative">
        <img
          src="http://192.168.0.10:8080/216e618b-db6b-461e-82f6-e3dc4c8ed814.jpeg"
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
          <h2 className="text-3xl font-bold">Recipe 1, Vietnamese</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-5">I want a software engineer job</p>
      </div>
      <div className="flex justify-center space-x-8 pb-4">
        <button
          className="bg-red-500 rounded-full p-4 text-white hover:bg-red-600"
          onClick={() => console.log("Left")}
        >
          <X size={24} />
        </button>
        <button
          className="bg-green-500 rounded-full p-4 text-white hover:bg-green-600"
          onClick={() => console.log("Right")}
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="max-w-md mx-auto">
        <nav className="flex justify-between">
          <User />
          <MessageCircle />
        </nav>
        <ProfileSelector />
      </div>
    </>
  );
}

export default App;
