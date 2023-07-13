import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./index.css";
import PostButton from "./components/PostButton";
import Kimochi from "./components/Kimochi";
import api_url from "./apiConfig";

type Post = {
  id: number;
  content: string;
  sentiment_score: number;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showPostButton, setShowPostButton] = useState(false);
  const [averageScore, setAverageScore] = useState<number | null>(null);  

  const fetchPosts = useCallback(async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    setPosts(data);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    if (posts.length === 0) {
      setAverageScore(null);
      return;
    }
    const sum = posts.reduce((sum, post) => sum + post.sentiment_score, 0);
    const newAverageScore = posts.length > 0 ? sum / posts.length : 0;
    setAverageScore(newAverageScore);
  }, [posts]);

  return (
    <div className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar averageScore={averageScore} posts={posts} />
        <Kimochi averageScore={averageScore} />
        <div style={{ marginBottom: "48px" }}>
          <PostForm
            fetchPosts={fetchPosts}
            setShowPostButton={setShowPostButton}
            showPostButton={showPostButton}
          />
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
