// Authenticate the client to communicate withe the backend.

import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skBSwa7pj0mqRwsk1tIof33zqbgHfcQ8xiNaMX9VFKPoSiKlAaRogEEB3n9wNLmljIBij0umZcQ9PjffshdfVl9dgatNncx6IHwjq7HarItV3JC1UM5xbhLYi5qFmYwEvD9kZ3hCD78PpqM7FgZcEKWh5q4kgfj3yGW6Y1z0k2qEpe4j3Tmh",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
