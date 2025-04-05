"use client"

import React, { useEffect, useState } from 'react';
import { Montserrat } from "next/font/google";
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { FaPlay } from "react-icons/fa";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

const LandingPage = () => {
    const [glowIntensity, setGlowIntensity] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [activeVideo, setActiveVideo] = useState('');

    const openModal = (videoSrc: string) => {
        setActiveVideo(videoSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setActiveVideo('');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setGlowIntensity(prev => (prev + 0.02) % 1);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const glowOpacity = 0.3 + 0.2 * Math.sin(glowIntensity * Math.PI * 2);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-red-600 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
            </div>

            <div className="hidden md:flex h-full relative z-10">
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center lg:space-x-4 text-4xl lg:text-8xl font-bold text-center tracking-widest z-10">
                    <span className="text-outline relative">
                        AAKAR
                        <span
                            className="absolute inset-0 text-gray-400 blur-md"
                            style={{ opacity: glowOpacity }}
                        >
                            AAKAR
                        </span>
                    </span>
                    <span className="text-outline relative">
                        2025
                        <span
                            className="absolute inset-0 text-blue-400 blur-md"
                            style={{ opacity: glowOpacity }}
                        >
                            2025
                        </span>
                    </span>
                </div>

                <div className="w-1/4 flex items-center justify-center">
                    <div className="relative right-[-20vw] top-[-50px] z-30 overflow-hidden">
                        <Image
                            src="/Aakarlogo.png"
                            alt="AAKAR Logo"
                            width={300}
                            height={150}
                            className="mx-auto"
                        />
                    </div>
                </div>

                <div className="w-2/4 flex flex-col h-full items-center justify-center relative overflow-hidden">
                    <div className="h-[90vh] flex items-center justify-center">
                        <div className="h-5/6 w-auto bg-contain bg-no-repeat bg-center z-20"
                            style={{ backgroundImage: "url('/character.png')", minWidth: "250px" }}>
                        </div>
                        <div className={`absolute bottom-40 z-20 ${montserrat.className} cursor-pointer`}>
                            <button className="flex items-center px-6 py-3 text-white cursor-pointer transition duration-300 group" onClick={() => { window.open('https://www.instagram.com/p/DH0aB6pSonD/', '_blank'); }}>
                                <div className="mr-3 w-10 h-10 flex items-center justify-center border-2 border-white rounded-full transition-all duration-300">
                                    <FaPlay className="text-sm" />
                                </div>

                                <span className="text-white font-semibold transition-colors duration-300 group-hover:text-white/80">
                                    Play Trailer
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center h-[10vh] mt-4 animate-blink text-red-400">
                        <FiChevronDown className="text-6xl" />
                    </div>
                </div>

                <div className="w-1/4 flex items-center justify-start relative overflow-visible">
                    <div className="relative rounded-[3rem] overflow-visible -ml-30 w-fit">
                        <div className="absolute inset-0 bg-black/50 rounded-[3rem] z-0 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-row space-x-4 py-14 px-8">
                            <div className="w-[18vw] h-auto rounded-3xl overflow-hidden shadow-lg shadow-blue-500/30 relative" onClick={() => openModal('/glimpse.mp4')}>
                                <video
                                    className="w-full h-full object-cover cursor-pointer"
                                    src="/glimpse.mp4"
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                />

                                <div
                                    className="absolute bottom-3 right-3 z-10 cursor-pointer"
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center hover:bg-opacity-100 transition">
                                        <FaPlay className="text-sm" />
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl border border-blue-400/30 pointer-events-none"></div>
                            </div>

                            <div className="w-[18vw] h-auto rounded-3xl overflow-hidden shadow-lg shadow-blue-500/30 relative" onClick={() => openModal('/glimpse.mp4')}>
                                <video
                                    className="w-full h-full object-cover cursor-pointer"
                                    src="/glimpse.mp4"
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                />

                                <div
                                    className="absolute bottom-3 right-3 z-10 cursor-pointer"
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center hover:bg-opacity-100 transition">
                                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 md:border-l-8 border-l-black border-b-4 border-b-transparent ml-1"></div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl border border-blue-400/30 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                        <div className="bg-black rounded-2xl overflow-hidden max-w-3xl w-full">
                            <video src={activeVideo} controls autoPlay className="w-full h-auto" />
                            <div className="text-right p-2">
                                <button
                                    onClick={closeModal}
                                    className="text-white text-sm cursor-pointer hover:text-red-400"
                                >
                                    Close ✖
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex md:hidden flex-col h-full items-center justify-between py-12">
                <div className="flex flex-col h-[90vh] items-center justify-center space-y-16">
                    <div className="text-white text-6xl font-bold tracking-wider relative top-[30px] text-centeroverflow-hidden">
                        <Image
                            src="/Aakarlogo.png"
                            alt="AAKAR Logo"
                            width={200}
                            height={100}
                            className="mx-auto"
                        />
                    </div>

                    <div className="h-full flex items-center justify-center mt relative">
                        <div className="h-5/6 w-auto bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: "url('/character.png')", minWidth: "250px" }}>
                        </div>
                        <div className={`mt-8 absolute bottom-12 ${montserrat.className}`}>
                            <button className="flex items-center bg-transparent cursor-pointer rounded-full px-6 py-3 text-white hover:text-black transition duration-300" onClick={() => { window.open('https://www.instagram.com/p/DH0aB6pSonD/', '_blank'); }}>
                                <div className="mr-3 w-10 h-10 rounded-full border-2 b-white flex items-center justify-center">
                                    <FaPlay className="text-sm" />
                                </div>
                                Play Trailer
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center h-[10vh] mt-4 animate-blink text-red-400">
                    <FiChevronDown className="text-6xl" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;