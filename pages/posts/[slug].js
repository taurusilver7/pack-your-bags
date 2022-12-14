import React from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import groq from "groq";
import Tag from "../../components/Tag";
import Maps from "../../components/Maps";
import Head from "next/head";

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

const PostComponents = {
  types: {
    image: ({ value }) => (
      <img className="post-image" src={urlFor(value)} alt="post-image" />
    ),
  },
};

const Post = ({ post }) => {
  // console.log(post);
  const {
    title,
    categories,
    body,
    authorImage,
    username,
    mainImage,
    postedAt,
    about,
  } = post;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {post && (
        <article className="post-container">
          <img
            src={urlFor(mainImage)}
            className="main-image-alt"
            alt="post_img"
          />
          <h1>{title}</h1>
          <hr />
          <div className="tag-container">
            {categories.map(
              (cat, index) => cat && <Tag key={index} title={cat.title} />
            )}
          </div>

          <PortableText value={body} components={PostComponents} />
          <hr />

          <div className="info-container">
            <div className="author-container">
              <img
                src={urlFor(authorImage)}
                className="avatar"
                alt={username + "_avatar"}
              />
              <h3>{username}</h3>
              <p>{about}</p>
              {/* <PortableText value={about} components={PostComponents} /> */}
            </div>

            <div className="map-container">
              <Maps longitude={postedAt.lng} lat={postedAt.lat} />
            </div>
          </div>
        </article>
      )}
    </>
  );
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
