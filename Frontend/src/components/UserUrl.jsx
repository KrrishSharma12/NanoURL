import { useState } from "react";
import { getAllUserUrls } from "../api/user.api.js";
import { useQuery } from "@tanstack/react-query";
const UserUrl = () => {
    const { data: urls, isLoading, isError, error } = useQuery({
        queryKey: ["userUrls"],
        queryFn: getAllUserUrls,
        refetchInterval: 30000,
        staleTime: 0,
    });
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = async (shortUrl, id) => {
        await navigator.clipboard.writeText(`http://localhost:3000/${shortUrl}`);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };
    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <div className="animate-spin rounded-full h-8 w-8 border-top-2 border-b-2 "></div>
            </div>
        )
    }
    if (isError) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4">
                Error loading your Urls:{error.message}

            </div>
        )
    }

    if (!urls || urls.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <p className="text-xl font-semibold">No URLs created yet</p>
                <p className="text-sm mt-2">Create your first short link 🚀</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto mt-10 px-4">
            <h2 className="text-2xl font-bold mb-6">Your Shortened URLs</h2>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-4 gap-4 font-semibold text-gray-600 border-b pb-3">
                <div>Original URL</div>
                <div>Short URL</div>
                <div className="text-center">Clicks</div>
                <div className="text-center">Action</div>
            </div>

            {/* Rows */}
            <div className="divide-y h-40 overflow-scroll">
                {urls.reverse().map((url) => (
                    <div
                        key={url._id}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 items-center"
                    >
                        {/* Original URL */}
                        <div className="break-all text-grey-900 truncate max-w-xs">
                            {url.full_url}
                        </div>

                        {/* Short URL */}
                        <div className="break-all font-medium text-blue-600" >
                            <a
                                href={`http://localhost:3000/${url.short_url}`}
                                target="_blank" rel="noopener noreferrer"
                            >
                                {`http://localhost:3000/${url.short_url}`}
                            </a>
                        </div>

                        {/* Clicks */}
                        <div className="md:text-center font-bold">
                            {url.clicks}
                        </div>

                        {/* Copy Button */}
                        <div className="md:text-center">
                            <button
                                onClick={() => handleCopy(url.short_url, url._id)}
                                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                            >
                                {copiedId === url._id ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );

}
export default UserUrl;