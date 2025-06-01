'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import { getBlogs } from "@/services/blog/blog"
import { Blog } from "@/services/blog/types"
import { CustomResizable } from "@/components/blog/custom-resizeable"

export default function BlogMain() {
    const { token } = useAuth()
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true)
                const response = await getBlogs()
                setBlogs(response.blogs || [])
            } catch (err) {
                console.error("Error fetching blogs:", err)
                setError("Failed to load blogs. Please try again later.")
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [token])

    // Show loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[600px]">
                <div className="animate-pulse text-xl">Loading blogs...</div>
            </div>
        )
    }

    // Show error state
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[600px]">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        )
    }

    // Show empty state if no blogs
    if (blogs.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[600px]">
                <h2 className="font-pacifico text-6xl font-semibold text-center my-15 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent px-3">BZEA BLOG</h2>
                <div className="text-gray-500 text-xl mt-8">No blog posts available yet.</div>
                <Link href="/blogs/create" className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"> Create First Post
                </Link>
            </div>
        )
    }
    // Featured blog (first blog)
    const featuredBlog = blogs[0]
    
    // Remaining blogs for small posts
    const remainingBlogs = blogs.slice(1)

    return (
        <div className="flex justify-center items-center flex-col my-5">
            <h2 className="font-pacifico text-6xl font-semibold text-center my-15 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent px-3">BZEA BLOG</h2>
            <p className="text-3xl font-mono text-gray-600 text-center my-10">Recent post</p>
            <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto">
                    <div className="md:col-span-2 h-[600px]">
                        <Link href={`/blogs/${featuredBlog.id}`}>
                            <CustomResizable
                                textSize="text-4xl" 
                                dateTime={new Date(featuredBlog.created_at).toISOString().split('T')[0]}
                                text={featuredBlog.title}
                            />
                        </Link>
                    </div>
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Map through the first 2 small posts */}
                        {remainingBlogs.slice(0, 2).map((blog) => (
                            <div key={blog.id} className="h-[290px]">
                                <Link href={`/blogs/${blog.id}`}>
                                    <CustomResizable 
                                        textSize="text-xl" 
                                        text={blog.title}
                                        dateTime={new Date(blog.created_at).toISOString().split('T')[0]}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-3xl font-mono text-gray-600 text-center my-10">All posts</p>
            {/* All posts section with 3 equal columns */}
            <div className="w-full px-4 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="h-[500px]">
                            <Link href={`/blogs/${blog.id}`}>
                                <CustomResizable 
                                    textSize="text-xl" 
                                    text={blog.title}
                                    dateTime={new Date(blog.created_at).toISOString().split('T')[0]}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Add blog button for authenticated users */}
            <div className="mb-10">
                <Link href="/blogs/create" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md">
                    Create New Blog Post
                </Link>
            </div>
        </div>
    );
}