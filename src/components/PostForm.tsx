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
  setShowPostButton: React.Dispatch<React.SetStateAction<boolean>>;
  showPostButton: boolean;
};

const PostForm: React.FC<PostFormProps> = ({
  fetchPosts,
  setShowPostButton,
  showPostButton,
}) => {
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
        position: "fixed",
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
        padding: "8px 16px 16px 16px",
        filter: "drop-shadow(0px 0px 5px #efefef)",
        boxShadow: showPostButton
          ? "5px 5px 9px #f5f5f5, -5px -5px 8px #fff"
          : "none",
      }}
    >
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={() => setShowPostButton(false)}
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#606060"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M9.414 8l3.293-3.293a1 1 0 0 0-1.414-1.414L8 6.586l-3.293-3.293a1 1 0 0 0-1.414 1.414L6.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414L8 9.414l3.293 3.293a1 1 0 0 0 1.414-1.414L9.414 8z"
            />
          </svg>
        </button>
        <div className="flex h-10 justify-end items-center">
          <small
            style={{
              letterSpacing: 0.6,
              color: "#909090",
              margin: "0 16px",
            }}
          >
            いまどんなかんじ？
          </small>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              color: "#1976d2",
              float: "right",
              boxShadow: post
                ? "5px 5px 9px #f5f5f5, -5px -5px 8px #fff"
                : "none",
            }}
            style={{
              backgroundColor: post ? "#e3f2fd" : "#ececec",
            }}
            disabled={!post}
          >
            つぶやく
          </Button>
        </div>
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
