import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { Gallery } from '../../src/components/Gallery';
import { Search } from '../../src/utils/types/search';

const GalleryPage = ({ searchResults }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Gallery searchResults={searchResults} />;
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { location } = query;

  const UNSPLASH_API_KEY = 'pRrZXfPJRI3fi3Bo5s8gwJz7VGgaRh3ZAGapWAaO2vA';
  const data: Search = await fetch(
    `https://api.unsplash.com/search/photos?per_page=18&query=${
      location ?? 'india'
    }&client_id=${UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      searchResults: data
    }
  };
};

export default GalleryPage;
