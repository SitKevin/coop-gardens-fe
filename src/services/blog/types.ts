export interface Blog {
  id: number;
  title: string;
  content: string;
  author_id: string;
  created_at: string;
  author_name?: string; 
}

export interface Comment {
  id: number;
  blog_id: number;
  author_id: string;
  content: string;
  created_at: string;
  author_name?: string; 
}

export interface Review {
  id: number;
  inventory_id: number;
  user_id: string;
  rating: number;
  comment?: string;
  created_at: string;
  user_name?: string; 
}

export interface GetAllBlogsResponse {
  blogs: Blog[];
}

export interface GetBlogResponse {
  blog: Blog;
}

export interface GetCommentsResponse {
  comments: Comment[];
}

export interface GetReviewsResponse {
  reviews: Review[];
}