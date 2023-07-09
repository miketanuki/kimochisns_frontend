import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./index.css";
import PostButton from "./components/PostButton";
import Kimochi from "./components/Kimochi";

type Post = {
  id: number;
  content: string;
  user: string;
  sentiment_score: number;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showPostButton, setShowPostButton] = useState(false);
  const averageScore =
    posts.reduce((sum, post) => sum + post.sentiment_score, 0) / posts.length;

  const api_url =
    process.env.NODE_ENV === "production"
      ? "https://kimochisns-backend.onrender.com/api/posts"
      : "http://localhost:5000/api/posts";

  const fetchPosts = async () => {
    const response = await fetch(api_url);
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
        <Kimochi score={averageScore} />
        <div style={{ marginBottom: "48px" }}>
          <PostForm fetchPosts={fetchPosts} showPostButton={showPostButton} />
        </div>
        <PostList posts={posts} />
      </div>
      <PostButton
        setShowPostButton={setShowPostButton}
        showPostButton={showPostButton}
      />
    </div>
  );
};

export default App;
