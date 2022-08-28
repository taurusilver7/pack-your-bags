import React from "react";
import { urlFor } from "../lib/sanity";
import Tag from "./Tag";

const Card = ({ post }) => {
  return (
    <div className="card-container">
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishedAt).toDateString()}</p>

      <img
        src={urlFor(post.mainImage)}
        alt="post_image"
        className="main-image"
      />
      <hr />

      <div className="info-container">
        <p>Posted by: {post.username}</p>
        <img src={urlFor(post.authorImage)} alt="author" className="avatar" />
      </div>

      <div className="tag-container">
        {post.categories.map((cat, index) => (
          <>{cat && <Tag key={index} title={cat.title} />}</>
        ))}
      </div>
    </div>
  );
};

export default Card;
