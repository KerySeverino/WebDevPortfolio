"use client"; 
import React from "react";

const YoutubeEmbed = ({ videoId }) => {
  return (
    <iframe
      className="w-full aspect-[3/2] rounded-lg shadow-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeEmbed;
