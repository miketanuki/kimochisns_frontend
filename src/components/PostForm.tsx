import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import "../index.css";

const api_url =
  process.env.NODE_ENV === "production"
    ? "https://kimochisns-backend.onrender.com/api/posts"
    : "http://localhost:5000/api/posts";

type PostFormProps = {
  fetchPosts: () => Promise<void>;
  showPostButton: boolean;
};

const PostForm: React.FC<PostFormProps> = ({ fetchPosts, showPostButton }) => {
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
    <div
      className="max-w-7xl mx-auto"
      style={{
        position: "absolute",
        top: "80px",
        left: "0",
        right: "0",
        opacity: showPostButton ? 1 : 0,
        transition: "opacity 0.4s ease 0s",
        zIndex: 100,
        margin: "0 auto",
        width: "calc(100% - 48px)",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "16px",
        filter: "drop-shadow(0px 0px 5px #efefef)",
        boxShadow: showPostButton
          ? "5px 5px 9px #f5f5f5, -5px -5px 8px #fff"
          : "none",
      }}
    >
      <form onSubmit={handleSubmit}>
        <small>いまどんなかんじ？</small>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50px",
            backgroundColor: "#e3f2fd",
            color: "#1976d2",
            float: "right",
          }}
          disabled={!post}
        >
          つぶやく
        </Button>
        <TextField
          sx={{ marginTop: "0", border: "none" }}
          // label="どんな気持ち"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="standard"
          style={{
            backgroundColor: "inherit",
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              border: "none",
            },
          }}
        />
      </form>
    </div>
  );
};

export default PostForm;
