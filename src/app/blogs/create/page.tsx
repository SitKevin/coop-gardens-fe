'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { createBlog } from "@/services/blog/blog"
import Link from "next/link"

export default function CreateBlogPage() {
    const router = useRouter()
    const { user } = useAuth()
    
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Redirect if not logged in
    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] px-4">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
                    <p className="mb-6">You need to be logged in to create a blog post.</p>
                    <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Log In
                    </Link>
                </div>
            </div>
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim() || !content.trim()) return
        
        try {
            setSubmitting(true)
            setError(null)
            
            await createBlog({ title, content })
            router.push("/blogs")
        } catch (err) {
            console.error("Error creating blog:", err)
            setError("Failed to create blog post. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-10">
            <Link href="/blogs" className="inline-flex items-center text-green-600 mb-6 hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Cancel and go back
            </Link>
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
                
                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter an engaging title for your blog post"
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border rounded-lg p-3"
                            rows={15}
                            placeholder="Write your blog content here..."
                            required
                        />
                    </div>
                    
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ${
                                submitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {submitting ? "Creating..." : "Publish Blog Post"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}