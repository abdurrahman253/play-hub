import React, { useContext, useEffect } from "react"; // 💡 useEffect import করা হয়েছে
import { useLoaderData, Link } from "react-router-dom";
import { FaStar, FaDownload, FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../pages/Loading";


const GameDetails = () => {
    const game = useLoaderData();

    const { loading } = useContext(AuthContext)

    // 💡 নতুন useEffect হুক: পেজ লোড হওয়ার পর স্ক্রলকে টপে নিয়ে যায়
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [game]); // game ডেটা লোড হওয়ার পরে এটি রান হবে, নিশ্চিত করতে যে নেভিগেশন সম্পূর্ণ হয়েছে।


    if (loading) {
        return <Loading></Loading>
    }

    if (!game) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-300 px-4">
                <h2 className="mb-4 text-2xl font-bold text-center text-orange-500 sm:text-3xl">
                    ⚠ Game Not Found
                </h2>
                <Link
                    to="/"
                    className="px-5 py-2 text-sm font-semibold text-white transition-all bg-orange-500 rounded-lg hover:bg-orange-600 sm:text-base"
                >
                    ⬅ Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-white px-4 py-8">
            <div className="w-full max-w-4xl bg-white/10 p-5 sm:p-8 rounded-2xl shadow-[0_0_25px_rgba(255,165,0,0.2)] backdrop-blur-lg">

                {/* Game Cover */}
                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="object-cover w-full h-56 mb-6 border sm:h-72 md:h-96 rounded-xl border-orange-400/30"
                />

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,165,0,0.4)] mb-4 text-center">
                    {game.title}
                </h1>

                {/* Description */}
                <p className="mb-6 text-base leading-relaxed text-center text-gray-300 sm:text-lg">
                    {game.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 gap-4 text-center text-gray-400 sm:grid-cols-3">
                    <div>
                        <span className="block text-sm font-semibold text-orange-400 sm:text-base">
                            Category
                        </span>
                        <span className="text-sm sm:text-base">{game.category}</span>
                    </div>
                    <div>
                        <span className="block text-sm font-semibold text-orange-400 sm:text-base">
                            Developer
                        </span>
                        <span className="text-sm sm:text-base">{game.developer}</span>
                    </div>
                    <div>
                        <span className="block text-sm font-semibold text-orange-400 sm:text-base">
                            Rating
                        </span>
                        <div className="flex items-center justify-center gap-1 text-sm text-yellow-400 sm:text-base">
                            <FaStar /> {game.ratings}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 px-5 py-2 text-sm transition-all bg-gray-800 rounded-lg hover:bg-gray-700 sm:text-base"
                    >
                        <FaArrowLeft /> Back
                    </Link>

                    <a
                        href={game.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold transition-all bg-orange-500 rounded-lg hover:bg-orange-600 sm:text-base"
                    >
                        <FaDownload /> Play Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;