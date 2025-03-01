"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ChallengeButton = ({ username }) => {
  const [fullUrl, setFullUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && username) {
      let domainPath = `${window.location.origin}/user/${username}`;
      setFullUrl(domainPath);
      console.log("fullUrl updated:", domainPath);
    }
  }, [username]);

  const shareMessage = "Check your friend's score!\n";
  const whatsappShareLink = `https://wa.me/?text=${encodeURIComponent(
    `${shareMessage}${fullUrl}`
  )}`;

  const handleShare = () => {
    setIsOpen(true);
  };
  const getRandomUnsplashUrl = () => {
    return `https://picsum.photos/500/300?random=${Math.random()}`;
  };

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={handleShare}
        className="text-white cursor-pointer"
        disabled={!username}
      >
        Challenge a friend
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-600 rounded-lg shadow-lg w-11/12 max-w-md overflow-hidden">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-40 h-40 m-auto overflow-hidden">
              <Image
                src={getRandomUnsplashUrl()}
                alt="Random Image"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <a
                href={whatsappShareLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.471-.15-.669.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.126 1.517 5.874L.517 23.75l5.917-1.55A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
                Share on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChallengeButton;
