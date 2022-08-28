import React from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import groq from "groq";

const query = groq`
*[_type == 'post' && slug.current == $slug][0] {
   title,
   "username": author->username,
   "about": author->bio,
   "categories": categories[]->{id, title},
   "authorImage": author->avatar,
   body,
   publishedAt,
   mainImage,
   postedAt
}
`;

const Post = ({ post }) => {
  console.log(post);
  return <div>Post</div>;
};

export default Post;

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const post = await getClient(preview).fetch(query, { slug: params.slug });

  return {
    props: {
      post,
    },
  };
};
