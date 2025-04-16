'use client';
import React, { useState } from 'react';
import { languages } from '../utils/data';
import { ChevronDown, Download, Menu, ClipboardPaste, X } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import logo from '../../../public/tikologo.png'
import playstoreImg from '../../../public/playstoreImg.webp'
import paste from '../../../public/paste.webp'
import search from '../../../public/search.webp'
import download from '../../../public/download.webp'
function English() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    return (
        <>
            <div className=" sticky top-0 z-50 text-gray-600 bg-white ">
                <nav className="flex justify-around items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/">
                        <Image src={logo} alt="Logo" className="w-36 h-24 cursor-pointer " />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-12 items-center font-medium">
                        <Link href="#" className="hover:text-gray-700 transition duration-300">
                            Save TikTok Video
                        </Link>
                        <Link href="#" className="hover:text-gray-700 transition duration-300">
                            TikTok MP3 Downloader
                        </Link>

                        {/* Language Dropdown (Hover) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center hover:text-gray-600 transition duration-300">
                                Languages{' '}
                                <ChevronDown
                                    className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    size={18}
                                />
                            </button>

                            <div
                                className={clsx(
                                    'absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-md shadow-xl transition-all duration-300 overflow-hidden',
                                    isDropdownOpen ? 'max-h-[600px] opacity-100 p-2' : 'max-h-0 opacity-0 p-0'
                                )}
                            >
                                <div className="grid grid-cols-2 gap-2">
                                    {languages.map((lang) => (
                                        <Link key={lang.code} href={`/${lang.code}`}>
                                            <div
                                                className="flex items-center text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer transition"
                                            >
                                                <img src={lang.flag} alt={lang.name} className="w-5 h-3 mr-2" />
                                                <span>{lang.name}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-gray-800">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span
                                className={`block transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90 scale-110' : ''}`}
                            >
                                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                            </span>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg p-4 space-y-3 animate-slide-down text-gray-800">
                        <Link href="#" className="block hover:text-blue-600">
                            Save TikTok Video
                        </Link>
                        <Link href="#" className="block hover:text-blue-600">
                            TikTok MP3 Downloader
                        </Link>

                        {/* Mobile Language Dropdown with Chevron */}
                        <div className="pt-2 border-t">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            >
                                <h3 className="font-semibold">Languages</h3>
                                <ChevronDown
                                    className={`transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    size={18}
                                />
                            </div>

                            <div
                                className={clsx(
                                    'grid grid-cols-2 gap-2 transition-all duration-300 overflow-hidden',
                                    isMobileDropdownOpen ? 'max-h-[600px] mt-2' : 'max-h-0'
                                )}
                            >
                                {languages.map((lang) => (
                                    <Link key={lang.code} href={`/${lang.code}`}>
                                        <div className="flex items-center hover:bg-gray-100 rounded-md px-2 py-1 transition">
                                            <img src={lang.flag} alt={lang.name} className="w-5 h-3 mr-2" />
                                            <span>{lang.name}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>




            <div className="h-96 flex flex-col items-center justify-center text-center mt-1 py-4 relative bg-teal-400">
                <h2 className="text-3xl font-bold text-white">
                    Tiktok Video Downloader
                </h2>
                <p className="hidden md:flex text-white text-md mt-2">
                    TikTok Downloader, Download Video TikTok Without Watermark (TikTok MP3 & MP4)
                </p>

                {/* Input & Button */}
                <div className="block md:flex mt-4 w-full px-4 md:px-0 max-w-2xl lg:max-w-3xl xl:max-w-5xl transition-all duration-300">
                    {/* Input Field + Paste/Clear Button */}
                    <div className="flex w-full items-center bg-white px-4 rounded-xl md:rounded-l-xl md:rounded-r-none">
                        <input
                            type="text"
                            placeholder="Paste TikTok link here"
                            className="w-full pl-2 outline-none text-black py-5"
                        />

                        {/* Paste Button with Icon */}
                        <button
                            className="flex items-center space-x-2 my-auto rounded-xl text-black font-semibold transition-all mr-2 hover:text-blue-600"
                        >
                            <ClipboardPaste size={18} />
                            <span>Paste</span>
                        </button>
                    </div>

                    {/* Download Button Section - Centered Vertically */}
                    <div className="w-full md:w-auto bg-none md:bg-white flex items-center justify-center p-2 rounded-b-xl md:rounded-r-xl md:rounded-l-none">
                        <button
                            className="w-full md:w-52 bg-blue-600 py-3 text-white px-6 font-semibold cursor-pointer rounded-xl hover:bg-blue-700 transition-all"
                        >
                            Download
                        </button>
                    </div>
                </div>





            </div>


            <div>
                <h1 className='w-full mt-9 text-3xl font-semibold text-center text-gray-700'>Download TikoSave App on Android</h1>
                <p className='text-gray-600 text-center mt-4 font-semibold'>The TikTok downloader app is available for downloading TikTok videos more conveniently if you use it very often.</p>

                <div className='w-full flex justify-center'>
                    <Image src={playstoreImg} alt="Logo" className=" mt-5 w-72 h-22 md:w-auto md:h-auto" />
                </div>
            </div>

            <div className="w-full max-w-7xl bg-gray-50 mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="w-full mt-6 text-2xl sm:text-3xl font-semibold text-center text-gray-700 leading-tight">
                    Introduction to TikTokio: TikTok Downloader Without Watermark
                </h1>

                <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
                    TikTok downloader tools are emerging in the market one after another. But not all of them are good to use. Some have a slow download speed, while others may ask people to pay. So our team has developed TikTokio. It’s a brand new TiKTok downloader that allows users to download videos from TikTok HD without any payment.
                </p>

                <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
                    TikTokio is a 100% free online TikTok video downloader. It aims to help people download TikTok videos (musically) without watermark. The process takes less than 5 seconds. You can find our TikTok saver on all kinds of devices, like desktops, tablets, PCs, and mobile phones. Everyone can save the TikTok videos in MP4 formats and then share them with families or friends.
                </p>

                <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
                    TikTokio is not just a TikTok MP4 downloader. With TikTokio, people can also extract audio files (MP3) from TikTok videos with no effort. This gives them a chance to freely download TikTok MP3, music, and songs of the best quality. Good for phone ringtones.
                </p>
            </div>



            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="w-full mt-6 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
                How to Download TikTok Video Without Watermark Online
                </h1>
                <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
                TikTok video download with TikoSave is very simple. All you need is to get the link of the TikTok video you want to download. Our TikTok downloader tool will do the rest for you. To find out the detailed steps, please follow the instructions below.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src={search} alt="Logo" className="w-16 h-16 cursor-pointer " />
                <h3 className="text-xl font-bold mt-2 text-gray-700">
                Find the TikTok Video to Be Saved
                </h3>
                <p className="mt-2 text-center text-gray-600 font-poppins">
                Open the TikTok App on your device and play the video you want to download. Tap the “Share” button at the bottom right of the video page and select “Copy Link.”
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src={paste} alt="paste" className="w-16 h-16 cursor-pointer " />
                <h3 className="text-xl font-bold mt-2 text-gray-700">
                Paste the TikTok Video Link
                </h3>
                <p className="mt-2 text-center text-gray-600 font-poppins">
                Visit our TikTok downloader site (https://tikosave.com) or open the TikTokio app. Then paste the video link in the input box above. After that, click the “Download” button.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src={download} alt="paste" className="w-16 h-16 cursor-pointer " />
                <h3 className="text-xl font-bold mt-2 text-gray-700">
                Choose the Format and Download
                </h3>
                <p className="mt-2 text-center text-gray-600 font-poppins">
                Choose the format you want and click the preferred option. Several options are available: Download Without Watermark”, “Download with Watermark”, “ Download MP3”, etc.
                </p>
              </div>
            </div>
            </div>

        </>
    );
}

export default English;
