import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const api_url =
  process.env.NODE_ENV === "production"
    ? "https://kimochisns-backend.onrender.com/api/posts"
    : "http://localhost:5000/api/posts";

type PostFormProps = {
  fetchPosts: () => Promise<void>;
};

const PostForm: React.FC<PostFormProps> = ({ fetchPosts }) => {
  const [post, setPost] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(
      api_url,
      { content: post },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setPost("");
    fetchPosts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="投稿内容"
        variant="outlined"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        投稿
      </Button>
    </form>
  );
};

export default PostForm;
