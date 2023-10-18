import React, { useState, useEffect } from "react";
import { getPosts } from "../api";

const Post = ({ title, body }) => (
  <div className="post">
    <div className="title">{title}</div>
    <div className="body">{body}</div>
  </div>
);

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);
  return (
    <div className="posts">
      {posts &&
        posts.map(({ id, title, body }) => (
          <Post key={id} title={title} body={body} />
        ))}
    </div>
  );
};

export default Posts;
