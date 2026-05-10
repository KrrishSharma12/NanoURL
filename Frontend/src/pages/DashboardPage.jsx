import React from 'react'
import UrlShortener from '../components/UrlShortener'
import UserUrl from '../components/UserUrl'
const DashboardPage = () => {
  return (
    <>
      <div className="min-h-screen relative  flex items-center justify-center -mt-5  px-4">
        <div className=" bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            URL Shortener
          </h1>
          <UrlShortener />
          <UserUrl/>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
