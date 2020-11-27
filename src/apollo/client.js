import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `/.netlify/functions/LollyPop`,
    fetch,
  }),
  cache: new InMemoryCache(),
});
