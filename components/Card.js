import Image from "next/image";
import React, { forwardRef } from "react";
import { urlFor } from "../lib/sanity";
import Tag from "./Tag";

// eslint-disable-next-line react/display-name
const Card = forwardRef(({ onClick, href, post }, ref) => {
	const { title, username, authorImage, publishedAt, mainImage, categories } =
		post;
	return (
		<div className="card-container" href={href} onClick={onClick} ref={ref}>
			<img src={urlFor(mainImage)} alt="post_image" className="main-image" />
			<hr />
			{/* <p>Published on: {new Date(post.publishedAt).toDateString()}</p> */}

			<div className="info-container">
				<div>
					<h3>{title}</h3>
					<p>
						{username} ·{" "}
						<span>{new Date(publishedAt).toDateString()}</span>
					</p>
				</div>
				{/* Author Image */}
				<img src={urlFor(authorImage)} alt="author" className="avatar" />
			</div>

			<div className="tag-container">
				{categories.map((cat, index) => (
					<>{cat && <Tag key={index} title={cat.title} />}</>
				))}
			</div>
		</div>
	);
});

export default Card;
