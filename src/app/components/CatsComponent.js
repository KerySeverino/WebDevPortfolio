"use client";

import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";
import Card from "./Card";

export default function CatsComponent() {
  return (
    <>
      {/* Container */}
      <div className="relative w-full min-h-screen">
  
        <div className="relative z-20 pt-15">
          {/* Weekly Pawsitivity Quote */}
          <div className="cats-margin-size">
            <div className="bg-gray-500/50 rounded-3xl m-5 p-5 mt-5 mb-10 text-center z-20">
              <h1 className="text-3xl">Weekly Pawsitivity Quote</h1>
              <p>
                "You are not behind. You are exactly where you need to be to get to where you're going." - Emily Maroutian
              </p>
            </div>
          </div>
          
          <div className="cats-margin-size">
            {/* My Cat Corner */}
            <div className="bg-gray-500/50 rounded-3xl m-5 p-4 mt-10 mb-10 text-center">
              <h1 className="text-3xl">My Cat Corner</h1>
              <p className="m-5">
                Cats are simply the best, and what better way to share my love for them than by giving them their own special place on my site? 
                Meet Miles and MJ, my two adorable, mischievous, and absolutely perfect feline companions! 
                They fill my days with endless cuddles, playful antics, and the occasional chaos because what's life without a little cat drama?
              </p>

              {/* Cat Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 m-4 overflow-x-auto p-2">
                {["miles-1.png", "miles-2.png", "mj-1.png", "mj-2.png"].map((cat, index) => (
                  <div key={index} className="flex flex-col justify-center items-center">
                    <Image src={`/${cat}`} width={200} height={200} alt={cat} className="img-hover-scale-effect rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cats-margin-size">
            <div className="bg-gray-500/50 pb-10 rounded-3xl m-5 p-4 mt-10 mb-10 text-center">
              <h1 className="text-3xl mb-6">Cat Tweets</h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 items-stretch">
              <div className="flex">
                  <Card 
                    imageSrc="/miles-tweet.png" 
                    imageAlt="Miles Tweet" 
                    title="Miles" 
                    paragraph="Wherever Dad goes, I go. That’s the rule!"
                    hashtags={["Sleepy", "CoolCat", "MyBestBud"]}
                  />
                </div>
                <div className="flex">
                  <Card 
                    imageSrc="/mj-tweet.png" 
                    imageAlt="MJ Tweet" 
                    title="MJ" 
                    paragraph="If Miles leaves food behind... well, it’s mine now. Simple math."
                    hashtags={["QueenMJ", "Treats?", "FoodStealer"]}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="cats-margin-size">
            {/* Awesome Cat Videos */}
            <div className="bg-gray-500/50 rounded-3xl m-5 p-4 mb-30 text-center">
              <h1 className="text-3xl">Awesome Cat Videos</h1>
              <p>A collection of videos that I want to share, which I found funny or cute. I hope you enjoy them!</p>

              {/* Cat Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 m-4 overflow-x-auto p-2">
                {["paWE-GvDO1c?si=vP6nXL8OjMq3cE8M", "Jt1_Q_tnbEk?si=n-5gN0I2c-OadKDo", "8iY66B5NB2w?si=hBaR3OK3jRJaluZ5", "-vzQdTvm2VA?si=8zzgiz3Seynmssr9"].map((videoId, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <YoutubeEmbed videoId={videoId} />
                  </div>
                ))}
              </div>
            </div>
          </div>
         

          <hr className="my-10 border-gray-500 w-3/4 mx-auto" />

          {/* Why This Page Exists */}
          <div className="bg-gray-500/50 rounded-3xl m-5 p-5 mt-20 mb-10 text-center">
              <h1 className="text-2xl">Why This Page Exists?</h1>
              <p className="mt-5">
                Every portfolio reflects not just the creator’s work, but also what drives and inspires them. 
                For me, problem solving, creativity, and continuous learning fuel my passion for development. 
                While coding is a huge part of my life, so are the things that bring me joy - cats, sleep, and great food!
                This page is a personal touch, reminding me that creativity isn’t limited to code, 
                it’s about building meaningful experiences, whether in software, design, or everyday life.
              </p>
          </div>
        </div>
      </div>
    </>
  );
}
