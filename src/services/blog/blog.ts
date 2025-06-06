import { callApi } from "../auth/apiClient";
import { 
  Blog, 
  Comment, 
  Review, 
  GetAllBlogsResponse, 
  GetBlogResponse,
  GetCommentsResponse,
  GetReviewsResponse
} from "./types";

// Get all blogs
export const getBlogs = async (): Promise<GetAllBlogsResponse> => {
  return callApi("/v2/blog", {
    method: "GET",
  });
};

// Get blog by ID
export const getBlogById = async (id: number): Promise<GetBlogResponse> => {
  return callApi(`/v2/blog/${id}`, {
    method: "GET",
  });
};

// Create a new blog
export const createBlog = async (blog: {
  title: string;
  content: string;
}): Promise<Blog> => {
  return callApi("/v2/blog", {
    method: "POST",
    body: JSON.stringify(blog),
  });
};

// Get comments for a blog
export const getBlogComments = async (blogId: number): Promise<GetCommentsResponse> => {
  return callApi(`/v2/blog/${blogId}/comments`, {
    method: "GET",
  });
};

// Create a comment for a blog
export const createComment = async (
  blogId: number,
  comment: {
    content: string;
  }
): Promise<Comment> => {
  return callApi(`/v2/blog/${blogId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });
};

// Create a product review
export const createReview = async (review: {
  inventory_id: number;
  rating: number;
  comment?: string;
}): Promise<Review> => {
  return callApi("/v2/blog/reviews", {
    method: "POST",
    body: JSON.stringify(review),
  });
};

// Get reviews for a product
export const getProductReviews = async (inventoryId: number): Promise<GetReviewsResponse> => {
  return callApi(`/v2/blog/reviews/${inventoryId}`, {
    method: "GET",
  });
};