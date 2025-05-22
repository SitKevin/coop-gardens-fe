import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function Custom404() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>404 page</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="bg-cover bg-center h-64 w-full" style={{ backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')" }}>
            <h1 className="text-8xl font-bold text-gray-800">404</h1>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">Look like you&apos;re lost</h3>
            <p className="text-lg mt-2">The page you are looking for is not available!</p>
            <Link href="/" className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}