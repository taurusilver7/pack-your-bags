import Head from "next/head";
import Link from "next/link";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import Card from "../components/Card";

export default function Home({ posts }) {
	// console.log(posts);
	return (
		<div className="dashboard">
			<Head>
				<title>Pack Your Bags</title>
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<div className="posts-container">
				{posts?.map((post, index) => (
					<div key={index}>
						<Link
							href="/posts/[slug]"
							as={`/posts/${post.slug.current}`}
							passHref
						>
							<Card post={post} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export async function getStaticProps({ preview = false }) {
	const posts = await getClient(preview).fetch(groq`
  *[_type == 'post' && publishedAt < now()] | order(publishedAt desc) {
  _id,
  title,
  "username": author->username,
  "categories": categories[]->{id, title},
  "authorImage": author->avatar,
  body,
  mainImage,
  slug,
  publishedAt,
}
  `);

	return {
		props: {
			posts,
		},
	};
}
