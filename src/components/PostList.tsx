import React, { useState, useEffect } from "react";
import { List, ListItem, Typography } from "@mui/material";
import SentimentalTag from "./SentimentalTag";
import { styled, width } from "@mui/system";

type Post = {
  id: number;
  content: string;
  user: string;
  sentiment_score: number;
};

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {

  return (
    <div style={{width:"100%"}}>
      <List sx={{ borderTop: "1px solid #ccc" }}>
        {posts.map((post) => (
          <ListItem key={post.id} sx={{ borderBottom: "1px solid #ccc" }}>
            <div style={{width:"100%"}}>
              <Typography variant="h6" width={"100%"}>{post.id}</Typography>
              <Typography variant="body1">{post.content}</Typography>
            <SentimentalTag
              sentiment_score={post.sentiment_score}
              ></SentimentalTag>
              </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PostList;
