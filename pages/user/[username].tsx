import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import Profile from '../../src/components/Profile';
import { User } from '../../src/utils/types/user';
import { UserPhoto } from '../../src/utils/types/userphoto';

const ProfilePage = ({
  user,
  userPhotos
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Profile user={user} userPhotos={userPhotos} />;
};

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { username } = query;

  const UNSPLASH_API_KEY = 'pRrZXfPJRI3fi3Bo5s8gwJz7VGgaRh3ZAGapWAaO2vA';
  const userData: User = await fetch(`https://api.unsplash.com/users/${username}`, {
    headers: {
      authorization: 'Client-ID ckXJ6Yyw4QsdfqI2FI7uUQyNnMdGG1Cxw5SJVVLsRBA'
    }
  }).then((res) => res.json());

  const userPhotosData: UserPhoto[] = await fetch(
    `https://api.unsplash.com/users/${username}/photos?&page=1&per_page=18&order_by=latest&stats=false&orientation=landscape&client_id=${UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      user: userData,
      userPhotos: userPhotosData
    }
  };
};

export default ProfilePage;
