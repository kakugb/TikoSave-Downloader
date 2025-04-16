"use client";
import React, { useEffect, useState } from "react";
import { languages, reviews, faqData, faqAnswers } from "../utils/data";
import { ChevronDown, Download, Menu, ClipboardPaste, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function English() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const toggleFAQ = (index:any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <>
      <div className=" sticky top-0 z-50 text-gray-600 bg-white py-2 shadow-md">
        <nav className="flex justify-around items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/tikologo.jpg"
              alt="Paste Icon"
              width={220}
              height={220}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center font-medium">
            <Link
              href="#"
              className="hover:text-gray-700 transition duration-300"
            >
              Save TikTok Video
            </Link>
            <Link
              href="#"
              className="hover:text-gray-700 transition duration-300"
            >
              TikTok MP3 Downloader
            </Link>

            {/* Language Dropdown (Hover) */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-gray-600 transition duration-300">
                Languages{" "}
                <ChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  size={18}
                />
              </button>

              <div
                className={clsx(
                  "absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-md shadow-xl transition-all duration-300 overflow-hidden",
                  isDropdownOpen
                    ? "max-h-[600px] opacity-100 p-2"
                    : "max-h-0 opacity-0 p-0"
                )}
              >
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <Link key={lang.code} href={`/${lang.code}`}>
                      <div className="flex items-center text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer transition">
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-5 h-3 mr-2"
                        />
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
                className={`block transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-90 scale-110" : ""
                }`}
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
                  className={`transition-transform duration-300 ${
                    isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  size={18}
                />
              </div>

              <div
                className={clsx(
                  "grid grid-cols-2 gap-2 transition-all duration-300 overflow-hidden",
                  isMobileDropdownOpen ? "max-h-[600px] mt-2" : "max-h-0"
                )}
              >
                {languages.map((lang) => (
                  <Link key={lang.code} href={`/${lang.code}`}>
                    <div className="flex items-center hover:bg-gray-100 rounded-md px-2 py-1 transition">
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-5 h-3 mr-2"
                      />
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
          TikTok Downloader, Download Video TikTok Without Watermark (TikTok MP3
          & MP4)
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
            <button className="flex items-center space-x-2 my-auto rounded-xl text-black font-semibold transition-all mr-2 hover:text-blue-600">
              <ClipboardPaste size={18} />
              <span>Paste</span>
            </button>
          </div>

          {/* Download Button Section - Centered Vertically */}
          <div className="w-full md:w-auto bg-none md:bg-white flex items-center justify-center p-2 rounded-b-xl md:rounded-r-xl md:rounded-l-none">
            <button className="w-full md:w-52 bg-blue-600 py-3 text-white px-6 font-semibold cursor-pointer rounded-xl hover:bg-blue-700 transition-all">
              Download
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="w-full mt-9 text-3xl font-semibold text-center text-gray-700">
          Download TikoSave App on Android
        </h1>
        <p className="text-gray-600 text-center mt-4 font-semibold">
          The TikTok downloader app is available for downloading TikTok videos
          more conveniently if you use it very often.
        </p>

        <div className="w-full flex justify-center mt-5">
          <Image
            src="/playstoreImg.webp"
            alt="playstore image"
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className="w-full max-w-7xl bg-gray-50 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-6 text-2xl sm:text-3xl font-semibold text-center text-gray-700 leading-tight">
          Introduction to TikTokio: TikTok Downloader Without Watermark
        </h1>

        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          TikTok downloader tools are emerging in the market one after another.
          But not all of them are good to use. Some have a slow download speed,
          while others may ask people to pay. So our team has developed
          TikTokio. It’s a brand new TiKTok downloader that allows users to
          download videos from TikTok HD without any payment.
        </p>

        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          TikTokio is a 100% free online TikTok video downloader. It aims to
          help people download TikTok videos (musically) without watermark. The
          process takes less than 5 seconds. You can find our TikTok saver on
          all kinds of devices, like desktops, tablets, PCs, and mobile phones.
          Everyone can save the TikTok videos in MP4 formats and then share them
          with families or friends.
        </p>

        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          TikTokio is not just a TikTok MP4 downloader. With TikTokio, people
          can also extract audio files (MP3) from TikTok videos with no effort.
          This gives them a chance to freely download TikTok MP3, music, and
          songs of the best quality. Good for phone ringtones.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          How to Download TikTok Video Without Watermark Online
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          TikTok video download with TikoSave is very simple. All you need is to
          get the link of the TikTok video you want to download. Our TikTok
          downloader tool will do the rest for you. To find out the detailed
          steps, please follow the instructions below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image src="/search.webp" alt="Paste Icon" width={52} height={52}  className="mb-2" />
            <h3 className="text-xl font-bold mt-2 text-gray-700">
              Find the TikTok Video to Be Saved
            </h3>
            <p className="mt-2 text-center text-gray-600 font-poppins">
              Open the TikTok App on your device and play the video you want to
              download. Tap the “Share” button at the bottom right of the video
              page and select “Copy Link.”
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image src="/paste.webp" alt="Paste Icon" width={52} height={52}  className="mb-2" />

            <h3 className="text-xl font-bold mt-2 text-gray-700">
              Paste the TikTok Video Link
            </h3>
            <p className="mt-2 text-center text-gray-600 font-poppins">
              Visit our TikTok downloader site (https://tikosave.com) or open
              the TikTokio app. Then paste the video link in the input box
              above. After that, click the “Download” button.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/download.webp"
              alt="Paste Icon"
              width={52}
              height={52}
              className="mb-2"
            />
            <h3 className="text-xl font-bold mt-2 text-gray-700">
              Choose the Format and Download
            </h3>
            <p className="mt-2 text-center text-gray-600 font-poppins">
              Choose the format you want and click the preferred option. Several
              options are available: Download Without Watermark”, “Download with
              Watermark”, “ Download MP3”, etc.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-xl">
        <h1 className="w-full mt-6 text-3xl sm:text-4xl font-bold text-center text-gray-700 leading-tight">
          Why Do You Need A TikTok Downloader
        </h1>

        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-md text-center">
          There are several reasons why you may need a TikTok (video) downloader
          like TikoSave. A TikTok downloader is useful for downloading TikTok
          videos without a watermark offline, sharing content with others
          easily, saving their favorite videos in case the videos are deleted by
          the platform, and facilitating further content editing and remixing.
          It enhances the user experience and allows for greater convenience and
          creativity.
        </p>

        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-md text-center">
          With this TikTok downloader, content creators can easily save their
          TikTok videos without the TikTok logo or ID and share them on
          Facebook, YouTube Shorts, Instagram, and other social platforms to
          expand their reach.
        </p>

        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-md text-center">
          Overall, our TikoSave video downloader is simple, fast, and free to
          use. You can download TikTok videos without watermark to any device
          you’d like and save them as MP4 or MP3 formats in HD quality. It’s
          tested that this TikTok watermark remover performs well in both
          Android and iOS systems (iPhones and iPads). Just copy and paste!
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          How to Download TikTok Video Without Watermark on Mobile Phones
          (Android)
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          It’s pretty simple to download TikTok videos (MP4/MP3) to Android
          phones with TikoSave. If you want to remove the TT watermark or logo
          of the videos and save them to Android, follow the instructions below:
        </p>
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-8 text-gray-600 text-base sm:text-lg list-disc list-inside">
          <li>
            Find the TikTok video you want to download without a watermark and
            play it
          </li>
          <li>
            Click the “Share” button on the right side and copy the link of the
            video
          </li>
          <li>
            Open the browser on your Android phone and go to tiktokio.com. Paste
            the video download link into the text box
          </li>
          <li>
            Hit the blue “Download” button and a range of options will show up.
            Select the one you want
          </li>
        </ul>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          TikTok Video Download to PCs
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          The steps of downloading TikTok videos to PCs or laptops are similar
          to downloading them to Android phones. Just replace “Android phones”
          with “personal computers”. Our TikTok watermark remover is compatible
          with various operating systems. Windows, Linux, and Mac OS.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          Download TikTok Video Without Watermark on iOS (iPhones or iPads)
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          Our team noticed that many iPhone users might have a problem with
          using other TikTok downloaders to save their favorite TikTok videos
          without watermarks.
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base sm:text-lg">
          To resolve this problem, we’ve upgraded our technology and made
          TikTokio a versatile TikTok video downloader for both Android and iOS
          users.
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base sm:text-lg">
          Here are the steps:
        </p>
        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-8 text-gray-600 text-base sm:text-lg list-disc list-inside">
          <li>Get the link of your favorite TikTok videos</li>
          <li>
            Go to tiktokio.com with your Safari application on your iPhone or
            iPad
          </li>
          <li>
            Paste the video link in the box and click on the “Download” button
          </li>
          <li>The download starts after selecting a format (MP4/MP3).</li>
        </ul>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          How to Download TikTok MP3 or Music (Extract the Audio Files from
          TikTok Videos)?
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          Lots of people are looking for methods to save their favorite TikTok
          videos in MP3 formats. With TikoSave, it’s no longer an issue.
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base sm:text-lg">
          The following steps will guide you on how to download TikTok MP3,
          songs, music, and audio files with TikTokio in a few seconds.
        </p>

        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-8 text-gray-600 text-base sm:text-lg list-disc list-inside">
          <li>
            Open the TT application/website on your device and play the video
            with the audio/music you desire to save.
          </li>
          <li>Tap the “Share” button at the right side of the video page</li>
          <li>
            Select “Copy Link” after a menu shows up. After that, the video URL
            will be copied to your clipboard
          </li>
          <li>
            Go to the TikoSave website (our TikTok downloader) and paste the
            copied video link into the input box
          </li>
          <li>
            Click on the “Download” button and you’ll see a range of options.
            The “Download mp3” option is usually located the last.
          </li>
          <li>
            Hit the “Download mp3” button and the conversion will be finished in
            5 seconds. You’ll see the downloaded TikTok music or songs in the
            default downloader folder.
          </li>
        </ul>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
          Pros & Cons of SaveTiko
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold text-green-500 mb-5">Pros</h3>
            <ul className="text-left text-lg mt-2 space-y-4">
              {[
                "Save TikTok videos without any logo or watermark for a clean look.",
                "No hidden charges, subscriptions, or sign-ups required.",
                "Just copy, paste, and download in seconds—no complex steps.",
                "Supports HD and original resolution video downloads.",
                "Use on PC, Mac, Android, and iPhones with any browser.",
                "100% online tool, no need to download extra software.",
                "Save as many TikTok videos as you want without limits.",
                "Convert TikTok videos into MP3 files and download the sound only.",
                "No personal data collection; your downloads are private.",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-500 text-2xl mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Cons */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold text-red-500 mb-5">Cons</h3>
            <ul className="text-left text-lg mt-2 space-y-4">
              {[
                "Doesn’t have a mobile app; works only via web browsers.",
                "Requires a stable internet connection to process downloads.",
                "On iOS, you may need to move the file manually from the Files app to the Photos app.",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaTimesCircle className="text-red-500 text-2xl mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          Compare TikoSave with Other TikTok Downloader Tools
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          The market of TikTok downloader websites has become increasingly
          competitive. Many TT video downloader tools have been developed.
          However, TikoSave stands out as a popular choice. It boasts fast and
          high-quality downloads without interruption, ease of use, unlimited
          conversions, and versatility on multiple devices.
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base font-bold">
          Benefits of Using TikoSave Over Other TikTok Video Downloaders
        </p>

        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-10 text-gray-600 text-base sm:text-lg list-disc list-inside">
          <li>
            Fast and high-quality downloads: TikTokio allows users to download
            HD TikTok videos with little effort. The download/conversion process
            lasts less than 5 seconds.
          </li>
          <li>
            100% free: Our TikTok downloader is always free to use. Users can
            save unlimited TikTok videos without watermarks on their Android or
            iPhones. No hidden costs.
          </li>
          <li>
            No watermark: Users are able to download the TikTok video with no
            watermark for better quality.
          </li>
          <li>
            User-friendly interface: The simple interface makes it easy and
            efficient to download videos from TikTok.
          </li>
          <li>
            MP3/MP4 formats: TikoSave supports the service of downloading TikTok
            videos in MP4 and MP3 formats.
          </li>
          <li>
            Compatible with many devices: You can access our TikTok downloader
            with many devices (i.e., personal computers, tablets, and
            smartphones).
          </li>
          <li>
            Safe TikTok saver with no virus: Your personal information won’t be
            disclosed since you don’t need to register or log in to use the
            TikTok downloader.
          </li>
        </ul>
      </div>

      <div className="w-full md:max-w-7xl mx-auto rounded-md text-black md:px-4 py-8">
        {/* Review Slider */}
        <div className="w-full text-white p-6 text-center  rounded-lg shadow-lg">
          <h2 className="text-md md:text-2xl font-bold  bg-teal-500 py-6">
            User Reviews for SaveTiko – The Best TikTok Video Downloader
          </h2>
          <div className="bg-white text-black p-6 rounded-lg shadow-md shadow-gray-500 transition-transform duration-500 ease-in-out h-36 flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg flex items-center">
              {reviews[currentIndex].name}
              <img
                src={reviews[currentIndex].flag}
                alt="flag"
                className="w-6 h-4 ml-2"
              />
            </h3>

            <p className="text-yellow-500 text-xl">
              {reviews[currentIndex].stars}
            </p>
            <p className="italic text-sm">"{reviews[currentIndex].comment}"</p>
          </div>
          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-bold  text-gray-600 ">
          How to Download Other Types of TikTok Content
        </h1>
        <p className="mt-4 leading-7 text-teal-500 font-bold text-base sm:text-2xl">
          Download Tiktok Photos or Images Slideshow
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base sm:text-md">
          Nowadays, content posted on TikTok is not limited to short-form
          videos. The official TikTok has launched new content forms like photo
          slideshows and stories. Hence, a need to download the TikTok photo or
          image slideshow is generated.
        </p>

        <p className="mt-2 leading-7 text-gray-600 text-base sm:text-md">
          We have added this feature to our TikTok downloader website
          (tikosave.com). So, you can freely download TikTok photos without
          watermarks to your devices.
        </p>

        <p className="mt-4 leading-7 text-teal-500 font-bold text-base sm:text-2xl">
          Download TikTok Stories
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base sm:text-md">
          Stories is another new TikTok feature. It allows creators to share a
          video of up to 15 seconds on their profiles. The video will disappear
          after 24 hours from the time of posting. Many people are seeking
          methods to download them without a watermark.
        </p>

        <p className="mt-2 leading-7 text-gray-600 text-base sm:text-md">
          However, we haven’t incorporated this feature into our website. So,
          currently, people are not able to download their favorite TikTok
          stories at TikoSave. We promise it will come soon.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="w-full mt-4 text-2xl sm:text-3xl font-semibold text-center text-white bg-teal-500 py-3 rounded-md">
          Tips for Using the TikTok Downloader Responsibly
        </h1>
        <p className="mt-4 leading-7 text-gray-600 text-base sm:text-lg">
          Downloading TikTok videos with TikTokio or similar downloaders is
          convenient. But it’s crucial to use this service responsibly. When
          enjoying or sharing content offline, respect the creators’ rights.
          Always adhere to ethical and legal standards.
        </p>
        <p className="mt-3 leading-7 text-gray-600 text-base font-bold">
          Here are some tips for using TikTokio responsibly:
        </p>

        <ul className="mt-4 sm:mt-6 ml-4 sm:ml-6 leading-7 text-gray-600 text-base sm:text-md text-justify">
          <li>
            <h1 className="text-xl font-semibold text-teal-500 my-3">
              1. Respect Copyrights
            </h1>
            TikTok videos are copyrighted by their creators. So make sure you
            get permission before saving TikTok videos without watermarks. Don’t
            use the downloaded videos or music for commercial purposes without
            consent.
          </li>

          <li>
            <h1 className="text-xl font-semibold text-teal-500 my-4">
              2. Use for Personal Growth or Educational Purposes
            </h1>
            TikTokio and other TikTok video downloaders are useful for personal
            growth or education. You can download informative content for
            offline playback or reference.
          </li>

          <li>
            <h1 className="text-xl font-semibold text-teal-500 my-4">
              3. Give Credit
            </h1>
            If you want to share the downloaded videos or audio on other social
            media platforms, credit the original content creator. You can
            mention their TikTok username or link to their profile.
          </li>
        </ul>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 my-10 pb-10 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-600 py-5 rounded-t-lg mb-5">
          FAQs – SaveTiko TikTok Video Downloader
        </h2>
        <div className="">
          {faqData.map((question, index) => (
            <div
              key={index}
              className={`border-b ${
                openFAQ === index ? "border-purple-700" : "border-gray-300"
              }`}
            >
              <button
                className={`w-full text-left p-4 flex justify-between items-center transition duration-300 rounded-md 
          ${
            openFAQ === index
              ? "bg-teal-400 text-white "
              : "bg-gray-50 text-gray-500 hover:bg-gray-200 hover:text-gray-600 "
          }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openFAQ === index
                      ? "rotate-180 text-white"
                      : "rotate-0 text-gray-600"
                  }`}
                >
                  {/* SVG Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-transform duration-500 ease-in-out transform origin-top ${
                  openFAQ === index
                    ? "scale-y-100 p-4 bg-white"
                    : "scale-y-0 h-0"
                }`}
              >
                <p className="text-gray-700 pt-3 pl-4">{faqAnswers[index]}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-gray-600 text-base sm:text-md bg-gray-200 px-8 py-6 leading-relaxed ">
          <b>Note:</b> TikoSave (Tiktok video Downloader) is not a tool of
          TikTok and we have no relationship with TikTok or ByteDance Ltd. We
          only support TikTok users to download videos on TikTok without logo
          with ease. Please do not infringe others’ copyright when you use the
          TikTok downloader site. If you have problems with sites like SnapTik,
          TikMate or SSSTikTok, try <b>TikoSave!</b> We are constantly updating
          to make it easy for users to FREELY download TikTok videos. Thank you!
        </p>
      </div>

      {/* Footer Links */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mt-6">
        <div>
          <h3 className="font-bold mb-2 text-lg">Tools</h3>
          <ul className="space-y-5 font-semibold text-gray-600">
            <li>TikTok Video Downloader</li>
            <li>TikTok MP3 Downloader</li>
            <li>TikTok Reel Downloader</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Legal</h3>
          <ul className="space-y-5 font-semibold text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Company</h3>
          <ul className="space-y-5 font-semibold text-gray-600">
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 mb-20">
        Copyright 2025 &copy; TikoSave.com Powered by TikoSave
      </div>
    </>
  );
}

export default English;
