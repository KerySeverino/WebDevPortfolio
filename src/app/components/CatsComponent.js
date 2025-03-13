"use client";

import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";

export default function CatsComponent() {
  return (
    <>
      {/* Weekly Pawsitivity Quote */}
      <div className="bg-gray-500 text-box-responsize-size rounded-3xl p-5 mt-5 mb-10 text-center">
        <h1 className="text-3xl">Weekly Pawsitivity Quote</h1>
        <p className="mt-10">
          "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." - Christian D. Larson
        </p>
      </div>

      {/* My Cat Corner */}
      <div className="bg-gray-500 text-box-responsize-size rounded-3xl p-4 mt-10 mb-30 text-center">
        <h1 className="text-3xl">My Cat Corner</h1>
        <p className="m-10">
          Cats are simply the best, and what better way to share my love for them than by giving them their own special place on my site? 
          Meet Miles and MJ, my two adorable, mischievous, and absolutely perfect feline companions! 
          They fill my days with endless cuddles, playful antics, and the occasional chaos because what's life without a little cat drama?
        </p>

        {/* Cat Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto p-2">
          {["miles-1.png", "miles-2.png", "mj-1.png", "mj-2.png"].map((cat, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <Image src={`/${cat}`} width={200} height={200} alt={cat} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Awesome Cat Videos */}
      <div className="bg-gray-500 text-box-responsize-size rounded-3xl  p-4 text-center">
        <h1 className="text-3xl">Awesome Cat Videos</h1>
        <p className="mt-10">
          A collection of videos that I want to share, which I found funny or cute. I hope you enjoy them!
        </p>

        {/* Cat Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 m-4 overflow-x-auto p-2">
          {["-_aMgxyQo_8", "L04WZCyp-Is", "-2hFF6pINUo", "ig49C04bJt0"].map((videoId, index) => (
            <div key={index} className="flex flex-col items-center">
              <YoutubeEmbed videoId={videoId} />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-10 border-gray-500 w-3/4 mx-auto" />

      {/* Why This Page Exists */}
      <div className="bg-gray-500 text-box-responsize-size rounded-3xl p-5 mt-20 mb-10 text-center img-hover-scale-effect">
          <h1 className="text-2xl">Why This Page Exists?</h1>
          <p className="mt-10 text-center">
            Every portfolio reflects not just the creator’s work, but also what drives and inspires them. 
            For me, problem solving, creativity, and continuous learning fuel my passion for development. 
            While coding is a huge part of my life, so are the things that bring me joy - cats, sleep, and great food!
            This page is a personal touch, reminding me that creativity isn’t limited to code, 
            it’s about building meaningful experiences, whether in software, design, or everyday life.
          </p>
      </div>
    </>
  );
}
