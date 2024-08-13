"use server"
import { NextRequest } from 'next/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer, } from '@apollo/server';
import { gql } from 'graphql-tag';
import { readFileSync }  from "fs";
import path from "path";
import { resolvers } from '@/utils/graphql/server/resolvers';


const typeDefs1 = `#graphql ${readFileSync(path.resolve(__dirname, "@/utils/graphql/server/schema.graphql"), {
  encoding:"utf-8"
})}`;

console.log("Is this page hitting ")

const typeDefs = `#graphql
 type Query {
    hello: message
  }

  type message = String 
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

export async function GET(request: NextRequest) {
  console.log("Is this page hitting as GET ")
  return handler(request);
}
export async function POST(request: NextRequest) {
  console.log("Is this page hitting  as POST")
  return handler(request);
}
