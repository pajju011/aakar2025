import React from 'react';

const LandingPage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-gray-800 opacity-10 w-full text-center tracking-widest">
                AAKAR 2025
            </div>

            <div className="flex h-full relative z-10">
                <div className="w-1/4 flex items-center justify-center">
                    <div className="text-white text-4xl md:text-6xl font-bold tracking-wider">
                        <div>
                            <span className="inline-block">AAKAR</span>
                            <br />
                            <span className="inline-block">
                                <span>2</span>
                                <span className="text-pink-500">0</span>
                                <span>2</span>
                                <span>5</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Center column - Character with play trailer button */}
                <div className="w-2/4 flex flex-col items-center justify-center relative">
                    {/* Character in red hoodie */}
                    <div className="h-full w-64 md:w-80 bg-transparent relative">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/character.png')" }}></div>
                    </div>

                    {/* Play trailer button at bottom */}
                    <div className="mt-8 absolute bottom-20">
                        <button className="flex items-center bg-transparent border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition duration-300">
                            <div className="mr-3 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-black border-b-4 border-b-transparent ml-1"></div>
                            </div>
                            Play Trailor
                        </button>
                    </div>
                </div>
                <div className="w-1/4 flex items-center justify-center">
                    <div className="flex flex-row space-y-6">
                        <div className="w-40 md:w-48 h-28 md:h-32 rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-blue-900 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/api/placeholder/192/128')" }}>
                                <div className="w-10 h-10 rounded-full bg-white bg-opacity-50 flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-black border-b-4 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-40 md:w-48 h-28 md:h-32 rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-blue-900 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/192/128')" }}></div>
                        </div>
                    </div>
                    <div className="absolute left-10 top-1/3 w-20 h-40 border-4 border-pink-500 rounded-full animate-pulse">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;