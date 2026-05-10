import React from 'react'
import UrlShortener from "../components/UrlShortener";
const HomePage = () => {
  return (
   <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          URL Shortener
        </h1>
        <UrlShortener/>
        </div>
        </div>
    </>
  )
}

export default HomePage;
