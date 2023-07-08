import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./index.css";

type Post = {
  id: number;
  content: string;
  user: string;
  sentiment_score: number;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const api_url = process.env.NODE_ENV === 'production'
  ? 'https://kimochisns-backend-dev.onrender.com/api/posts'
  : 'http://localhost:5000/api/posts';

  const fetchPosts = async () => {
    const response = await fetch(
      api_url
    );
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {

    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ marginBottom: "48px" }}>
          <PostForm fetchPosts={fetchPosts}/>
        </div>
        <PostList posts={posts}/>
      </div>
    </div>
  );
};

export default App;
