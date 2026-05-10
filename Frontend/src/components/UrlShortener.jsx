import React, { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
const UrlShortener = () => {
  const [Url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCopied, setisCopied] = useState(false);
  const [customUrl, setcustomUrl] = useState("")
  const { isAuthenticated } = useSelector((state) => state.auth)
  const queryClient = useQueryClient();
  const handleCopy = () => {
    setTimeout(() => {
      navigator.clipboard.writeText(shortUrl);
      setisCopied(false);

    }, 1500);

    setisCopied(true);

  }
  const handleShorten = async () => {
    if (!Url) {
      setError("Please enter a URL");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await createShortUrl(Url, customUrl || null);
      setShortUrl(data.shorturl);
      queryClient.invalidateQueries({ queryKey: ['userUrls'] });
      setUrl(" ");
      setcustomUrl(" ")
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);

    }
  };

  return (

    <>
      <input
        type="text"
        placeholder="Enter your long URL"
        required
        autoComplete="off"
        value={Url}
        onChange={(e) => { setUrl(e.target.value) }}
        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      <button
        onClick={handleShorten}
        disabled={loading}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>

      {isAuthenticated && (
        <div className="mt-4">
          <label htmlFor="customUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Custom URL (optional)
          </label>
          <input type="text" id="customUrl" value={customUrl} onChange={(e) => setcustomUrl(e.target.value)} autoComplete="off"
            placeholder="Enter Custom Url"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 to-blue-500" />
        </div>
      )}
      {shortUrl && (
        <div className="mt-4 bg-gray-200 p-3 rounded-lg text-center">
          <p className="text-sm text-gray-600">Short URL</p>
          <div className="flex justify-center items-center gap-7 ml-5 "> <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium break-all"
          >
            {shortUrl}
          </a>
            <input className={` box-border items-end w-17 h-9 rounded-md text-white cursor-pointer bg-black
             `}
              onClick={handleCopy} type="button" value={isCopied ? "copied" : "copy"} />

          </div>
        </div>
      )}
    </>
  );
};

export default UrlShortener;