# Pack Your Bags

> A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a travel logging application powered by Next js & sanity CMS.

## Scripts

```bash
yarn create next-app@latest <app_name>
# and
cd <app_name>
# and
yarn dev
#or
yarn start
```

To inititate the sanity local studio

```bash
npm i @sanity/cli && sanity init --coupon <coupon_code>
# and
sanity start (after bootstrapping & configuring a local studio project to handle the backend.)
```

## Build

Refactor the starter template & initiate the local development server (http://localhost:3000) on your browser to see the result.

Configure the santiy studio schemas for the application backend. Create post, blockContent, author & category schemas & concat them to the local studio. The blockContent (body), category, author are references to post.

Install a [leaflet-input sanity plugin](https://www.sanity.io/plugins/sanity-plugin-leaflet-input), to allow the current location & map feature in the sanity studio. Create a few data posts on tours & travels.
`sanity install leaflet-input`. The plugin creates a leaftlet config json file in the local studio to allow maps in the backend.

Create a navbar component to hold the tour list & project logo.

Create a server-side render instance to pull tour post data from sanity in the index page & populate them in Card component.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
