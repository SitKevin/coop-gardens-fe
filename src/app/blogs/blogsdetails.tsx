'use client'

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { getBlogById, getBlogComments, createComment } from "@/services/blog/blog"
import { Blog, Comment } from "@/services/blog/types"
import Link from "next/link"

export default function BlogDetail() {
    const { id } = useParams()
    const router = useRouter()
    const { user } = useAuth()
    
    const [blog, setBlog] = useState<Blog | null>(null)
    const [comments, setComments] = useState<Comment[]>([])
    const [loading, setLoading] = useState(true)
    const [commentLoading, setCommentLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    const [commentContent, setCommentContent] = useState("")
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        const fetchBlogAndComments = async () => {
            try {
                setLoading(true)
                const blogResponse = await getBlogById(Number(id))
                setBlog(blogResponse.blog)
                
                setCommentLoading(true)
                const commentsResponse = await getBlogComments(Number(id))
                setComments(commentsResponse.comments || [])
            } catch (err) {
                console.error("Error fetching blog:", err)
                setError("Failed to load blog post. Please try again later.")
            } finally {
                setLoading(false)
                setCommentLoading(false)
            }
        }
        
        if (id) {
            fetchBlogAndComments()
        }
    }, [id])

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!commentContent.trim() || !user) return
        
        try {
            setSubmitting(true)
            const newComment = await createComment(Number(id), { content: commentContent })
            setComments([...comments, newComment])
            setCommentContent("")
        } catch (err) {
            console.error("Error posting comment:", err)
        } finally {
            setSubmitting(false)
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[600px]">
                <div className="animate-pulse text-xl">Loading blog post...</div>
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className="flex justify-center items-center min-h-[600px]">
                <div className="text-red-500 text-xl">{error || "Blog post not found"}</div>
            </div>
        )
    }

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-10">
            <Link href="/blogs" className="inline-flex items-center text-green-600 mb-6 hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blogs
            </Link>
            
            <article className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center text-gray-500 mb-8">
                    <span>By {blog.author_name || "Anonymous"}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>
                
                <div className="prose max-w-none">
                    {/* Render blog content with proper paragraph formatting */}
                    {blog.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </div>
            </article>
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Comments</h2>
                
                {/* Comment form for logged in users */}
                {user && (
                    <form onSubmit={handleSubmitComment} className="mb-8 bg-gray-50 p-4 rounded-md">
                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                                Leave a comment
                            </label>
                            <textarea
                                id="comment"
                                rows={4}
                                className="w-full border rounded-lg p-3"
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                                placeholder="Share your thoughts..."
                                disabled={submitting}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitting || !commentContent.trim()}
                            className={`px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ${
                                (submitting || !commentContent.trim()) ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {submitting ? "Posting..." : "Post Comment"}
                        </button>
                    </form>
                )}
                
                {/* Login prompt for non-authenticated users */}
                {!user && (
                    <div className="bg-gray-50 p-4 rounded-md mb-8 text-center">
                        <p className="mb-2">Log in to leave a comment</p>
                        <button 
                            onClick={() => router.push("/login")}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Log In
                        </button>
                    </div>
                )}
                
                {/* Comments list */}
                {commentLoading ? (
                    <div className="text-center py-8">
                        <div className="animate-pulse">Loading comments...</div>
                    </div>
                ) : comments.length > 0 ? (
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="border-b pb-6">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{comment.author_name || "Anonymous"}</span>
                                    <span className="text-sm text-gray-500">
                                        {new Date(comment.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <p>{comment.content}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No comments yet. Be the first to share your thoughts!
                    </div>
                )}
            </div>
        </div>
    );
}