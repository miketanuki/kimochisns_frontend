import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SentimentalTag from "./SentimentalTag";


const PostList: React.FC = () => {
  type Post = {
    id: number;
    content: string;
    user: string;
    sentiment_score: number;
  };
  
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://kimochisns-backend.onrender.com/api/posts");
      const data = await response.json();
      setPosts(data);
      console.log(data);
      
    };
  
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.id}</Typography>
            <Typography variant="body1">{post.content}</Typography>
            <SentimentalTag sentiment_score={post.sentiment_score}></SentimentalTag>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
