import React from "react"

const YoutubeEmbed = ({videoId}) =>{
  return(
    <iframe 
    className="w-full aspect-[3/2] rounded-lg shadow-lg"
    src={`https://www.youtube.com/embed/${videoId}`} 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
  );
};

export default YoutubeEmbed;
