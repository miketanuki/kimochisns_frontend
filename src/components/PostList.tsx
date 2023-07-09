import { List, ListItem, Typography } from "@mui/material";
import SentimentalTag from "./SentimentalTag";

type Post = {
  id: number;
  content: string;
  user: string;
  sentiment_score: number;
};

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div style={{ width: "100%" }}>
      <List sx={{ borderTop: "1px solid #ccc" }}>
        {sortedPosts.map((post) => (
          <ListItem
            key={post.id}
            sx={{ borderBottom: "1px solid #ccc", padding: "24px 16px" }}
          >
            <div style={{ width: "100%" }}>
              {/* <Typography variant="h6" width={"100%"}>{post.id}</Typography> */}
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
