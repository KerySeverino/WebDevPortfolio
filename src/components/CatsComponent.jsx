import YoutubeEmbed from "./YoutubeEmbed";

function CatsComponent(){
    return(
        <>
        <div className="bg-gray-500 rounded-3xl m-32 p-5 mt-5 mb-10 text-center">
            <h1 className="text-3xl"> Weekly Pawsitivity Quote </h1>
            <p> "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle". - Christian D. Larson</p>
        </div>  

          

            <div className="bg-gray-500 rounded-3xl m-10 p-4 mt-10 mb-30 text-center"> 
                <h1 className="text-3xl"> My Cat Corner </h1>
                <p className="m-10"> Cats are simply the best, and what better way to share my love for them than by giving them their own special place on my site? Meet Miles and MJ, my two adorable, mischievous, and absolutely perfect feline companions! They fill my days with endless cuddles, playful antics, and the occasional chaos because what's life without a little cat drama?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 m-4 overflow-x-auto p-2">
                    <div className="flex flex-col justify-center items-center"> 
                        <img src="src/assets/miles-1.png" width="200"/>
                    </div>
                    <div className="flex flex-col justify-center items-center"> 
                        <img src="src/assets/miles-2.png" width="200"/>
                    </div>
                    <div className="flex flex-col justify-center items-center"> 
                        <img src="src/assets/mj-1.png" width="200"/>
                    </div>
                    <div className="flex flex-col justify-center items-center"> 
                        <img src="src/assets/mj-2.png" width="200"/>
                    </div>
                </div>              
            </div>

            
            <div className="bg-gray-500 rounded-3xl m-10 p-4 mb-30 text-center">
                <h1 className="text-3xl"> Awesome Cat Videos</h1>
                <p> A collection of videos that I want to share, which I found the funny or cute. I hope you enjoy them! </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 m-4 overflow-x-auto p-2">
                        <div className="flex flex-col items-center">
                            <YoutubeEmbed videoId="-_aMgxyQo_8?si=XtzDT_zMC3s46-Bw"/>
                        </div>

                        <div className="flex flex-col items-center">
                            <YoutubeEmbed videoId="L04WZCyp-Is?si=KZzLPMCFyVc1UWJt"/>
                        </div>

                        <div className="flex flex-col items-center">
                            <YoutubeEmbed videoId="-2hFF6pINUo?si=aVxOTazO4pJvTpZs"/>
                        </div>

                        <div className="flex flex-col items-center">
                            <YoutubeEmbed videoId="ig49C04bJt0?si=02bG_iMhJ4zwRg8k"/>
                        </div>
                </div>
            </div>

            <hr className="my-10 border-gray-500 w-3/4 mx-auto" />

            <div className="bg-gray-500 rounded-3xl m-32 p-5 mt-20 mb-10 text-center img-hover-scale-effect">
                <h1 className="text-2xl"> Why this page exist? </h1>
                <p className="m-10"> 
                    Every portfolio reflects not just the creator’s work, but also what drives and inspires them. 
                    For me, problem solving, creativity, and continuous learning fuel my passion for development. 
                    While coding is a huge part of my life, so are the things that bring me joy - cats, sleep, and great food!
                    This page is a personal touch, reminding me that creativity isn’t limited to code, 
                    it’s about building meaningful experiences, whether in software, design, or everyday life.
                </p>  
            </div>
        </>
      
    )
}

export default CatsComponent;