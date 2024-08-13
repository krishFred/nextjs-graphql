"use client";
import client from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import React from 'react'


const _wrapperComponent = ({children}:  React.PropsWithChildren) => {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}

export { _wrapperComponent as GraphQLProvider };