export type User = {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
  followed_by_user: boolean;
  photos: Photo[];
  badge: null;
  tags: Tags;
  followers_count: number;
  following_count: number;
  allow_messages: boolean;
  numeric_id: number;
  downloads: number;
  meta: Meta;
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

type Meta = {
  index: boolean;
};

type Photo = {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

type Social = {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
};

type Tags = {
  custom: Custom[];
  aggregated: Aggregated[];
};

type Aggregated = {
  type: Type;
  title: string;
  source?: AggregatedSource;
};

type AggregatedSource = {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: PurpleCoverPhoto;
};

type Ancestry = {
  type: Category;
  category?: Category;
  subcategory?: Category;
};

type Category = {
  slug: string;
  pretty_slug: string;
};

type PurpleCoverPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: CoverPhotoLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  user: UserClass;
};

type CoverPhotoLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

type PurpleTopicSubmissions = {
  'color-of-water'?: Animals;
  architecture?: Animals;
  wallpapers?: Animals;
  nature?: Animals;
  'textures-patterns'?: Animals;
  animals?: Animals;
  'arts-culture'?: Animals;
  health?: Animals;
  fashion?: Animals;
  experimental?: Animals;
  spirituality?: Animals;
};

type Animals = {
  status: Status;
  approved_on: Date;
};

export enum Status {
  'approved'
}

type UserClass = {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
};

export enum Type {
  LandingPage = 'landing_page',
  Search = 'search'
}

type Custom = {
  type: Type;
  title: string;
  source?: CustomSource;
};

type CustomSource = {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: FluffyCoverPhoto;
};

type FluffyCoverPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: null | string;
  urls: Urls;
  links: CoverPhotoLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  user: UserClass;
};

type FluffyTopicSubmissions = {
  'color-of-water'?: Animals;
  architecture?: Animals;
  wallpapers?: Animals;
  nature?: Animals;
  travel?: Animals;
};
