"use client"
import React from 'react'
import { useQuery } from '@apollo/client'
import { PRINT_MESSAGE } from '@/utils/graphql/client'

const GraphContent = () => {
  const { loading, error, data } = useQuery(PRINT_MESSAGE);
  console.log({ loading, error, data}, "console.log")

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return( <>
    {/* {data.featuredListings.map((listing: any, ) => (
      <div key={listing.id}>
        <h2>{listing.title}</h2>
      </div>
      
    ))} */}

    <h3> {data.hello} Success Message</h3>


  </>)
}

export default GraphContent