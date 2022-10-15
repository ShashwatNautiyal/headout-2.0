export type UserPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | undefined;
  alt_description: string | null;
  urls: Urls;
  links: UserPhotoLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: string | null;
  topic_submissions: unknown;
  user: User;
};

type UserPhotoLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

type User = {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: Location;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
};

type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

type Social = {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string | null;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};
