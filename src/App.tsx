import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./index.css";
import PostButton from "./components/PostButton";
import Kimochi from "./components/Kimochi";
import KimochiDonut from "./components/KimochiDonut";

type Post = {
  id: number;
  content: string;
  sentiment_score: number;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showPostButton, setShowPostButton] = useState(false);
  const useAverageScore = (posts: Post[]) => {
    const [averageScore, setAverageScore] = useState(0);
  
    useEffect(() => {
      const sum = posts.reduce((sum, post) => sum + post.sentiment_score, 0);
      const newAverageScore = sum / posts.length;
      setAverageScore(newAverageScore);
    }, [posts]);
  
    return averageScore;
  };

  const averageScore = useAverageScore(posts);
    

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
    <div className="pb-16">
      <Navbar averageScore={averageScore}/>
      <KimochiDonut posts={posts} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Kimochi score={averageScore} />
        <div style={{ marginBottom: "48px" }}>
          <PostForm fetchPosts={fetchPosts} setShowPostButton={setShowPostButton} showPostButton={showPostButton} />
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
