import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from 'axios';

const PostForm: React.FC = () => {
  const [post, setPost] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('https://kimochisns-backend.onrender.com/api/posts', { content: post }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPost('');
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
