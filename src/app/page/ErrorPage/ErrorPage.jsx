import React from 'react'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9d9d9_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>

      {/* Neon Circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#C4EE18] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 bg-[#C4EE18] rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#C4EE18] rounded-full"></div>

      {/* Main Content */}
      <div className="relative text-center px-6">
        <h1 className="text-6xl font-bold text-slate-800 mb-3">404</h1>
        <h2 className="text-xl text-slate-700 font-medium mb-2">
          Opps! Pages Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          We're really sorry but we can't seem to find the page you were looking for
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#C4EE18] text-slate-900 font-medium py-2 px-5 rounded-md hover:bg-lime-500 transition"
        >
          Back to Home →
        </a>
      </div>
    </div>
  )
}
