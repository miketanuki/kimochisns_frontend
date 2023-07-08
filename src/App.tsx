import React from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: "48px" }}>
          <PostForm />
        </div>
        <PostList />
      </div>
    </div>
  );
};

export default App;
