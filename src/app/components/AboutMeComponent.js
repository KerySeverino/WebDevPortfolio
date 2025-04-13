"use client";
import Carousel from './Carousel';
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function AboutMeComponent() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        setIsVisible(true);
        }, 150); 
    }, []);

    const courseraMachineLearningSpecializationImages = [
        { src: "/MachineLearning_1:3.png", alt: "ML 1" },
    ];

    const courseraPythonSpecializationImages = [
        { src: "/Python For Everybody_Specialization.png", alt: "Python For Everybody Specialization" },
        { src: "/Python for Everybody 5:5.png", alt: "Python 5" },
        { src: "/Python for Everybody 4:5.png", alt: "Python 4" },
        { src: "/Python for Everybody 3:5.png", alt: "Python 3" },
        { src: "/Python for Everybody 2:5.png", alt: "Python 2" },
        { src: "/Python for Everybody 1:5.png", alt: "Python 1" },
    ];

    const courseraGoogleCyberSecurityImages = [
        { src: "/Google CyberSecurity Certificate 2:8.png", alt: "Google CyberSecurity 2" },
        { src: "/Google CyberSecurity Certificate 1:8.png", alt: "Google CyberSecurity 1" },
    ];

    const hackerRankImages = [
        { src: "/hackerrank_sql.png", alt: "HackerRank SQL" },
        { src: "/hackerrank_python.png", alt: "HackerRank Python" },
    ];

    const soloLearnImages = [
        { src: "/sololearn_c.png", alt: "SoloLearn C" },
        { src: "/sololearn_java.png", alt: "SoloLearn Java" },
        { src: "/sololearn_python.png", alt: "SoloLearn Python" },
        { src: "/sololearn_html.png", alt: "SoloLearn Html" },
        { src: "/sololearn_tech.png", alt: "SoloLearn Tech" },
    ];

  return (
    <>
        {/* Intro Section */}
        <div className="min-h-screen pb-20">
            <div className="text-center pb-20 pt-20">
    
                <h1 className={`adaptable-title-size relative z-10 transition-all duration-800 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}> 
                    A LITTLE ABOUT ME
                </h1>
       
                <div className="grid grid-cols-1 xl:grid-cols-2 m-4 overflow-x-auto">
                    <div className="flex justify-center m-10">
                        <Image className="rounded-4xl" src="/self.jpg" alt="self-2" width={440} height={200} />
                    </div>
                    <div className="flex justify-center m-10">
                        <Image className="rounded-4xl" src="/self-2.png" alt="self-2" width={400} height={200} />
                    </div>

                </div>
                
            </div>

            {/* About Me Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 m-4 overflow-x-auto p-2">
                {/* Left Column - Text */}
                <div className="p-4 text-2xl">
                    <p className="animate-bounce">Hello everyone!</p>
                    <br />
                    <p>
                        I’m Kery Severino Diaz, originally from the Dominican Republic, and now proud to call New York City my home. 
                        While New York wasn’t exactly what I had envisioned, it’s a place where dreams can come true for those who are willing to put in the hard work and determination – and that’s exactly what I’m planning to do.
                        <br /><br />
                        My passion for coding began when I was young. Growing up in the Dominican Republic, I often used my mom’s computer for gaming, sparking my love for technology. Whether it was fixing tech issues or assembling furniture, I enjoyed helping others.
                        Now, in college, I’m pursuing my dream of making a positive impact through technology and cats!
                    </p>
                </div>

                {/* Right Column - Images */}
                <div className="flex flex-col items-start gap-4 p-4">
                    <div className="mr-auto img-hover-scale-effect">
                        <Image className="w-80 h-50" src="/newyorkcity.jpg" alt="New York City" width={320} height={200} />
                    </div>
                    <div className="mx-auto img-hover-scale-effect">
                        <Image className="w-50 h-30" src="/Flag-Dominican-Republic.jpg" alt="Dominican Republic Flag" width={200} height={150} />
                    </div>
                    <div className="ml-auto img-hover-scale-effect">
                        <Image className="w-80 h-50" src="/lehman-college.jpeg" alt="Lehman College" width={320} height={200} />
                    </div>
                </div>
            </div>
        </div>

        {/* Skills Section */}
        <div className="min-h-screen pb-20 pt-20 text-center">
            <div className="flex justify-center adaptable-title-size">
                <h1 className="text-4xl">My Skills</h1>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 m-4 p-2 ">
                {/* Frontend Skills */}
                <div className="skills-outside-hover-effect p-5 bg-gray-500/50 rounded-2xl">
                    <h1 className="underline mb-4 text-4xl">Frontend</h1>
                    <div className="adaptable-skills-grid">
                    {["html5", "css3", "javascript", "react", "bootstrap", "tailwindcss", "next.js"].map((tech) => (
                        <div key={tech} className="skills-inside-hover-effect">
                            <img src={`https://cdn.simpleicons.org/${tech}`} alt={tech} width={50} height={50} />
                            <h2>{tech.toUpperCase()}</h2>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="skills-outside-hover-effect p-5 bg-gray-500/50 rounded-2xl">
                    <h1 className="underline mb-4 text-4xl">Backend</h1>
                    <div className="adaptable-skills-grid">
                    {["postgresql", "mysql", "node.js", "amazonwebservices"].map((tech) => (
                        <div key={tech} className="skills-inside-hover-effect">
                            <img src={`https://cdn.simpleicons.org/${tech}`} alt={tech} width={50} height={50} />
                            <h2>{tech.toUpperCase()}</h2>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Technologies Skills */}
                <div className="skills-outside-hover-effect p-5 bg-gray-500/50 rounded-2xl">
                    <h1 className="underline mb-4 text-4xl">Technologies</h1>
                    <div className="adaptable-skills-grid">
                    {["github", "git"].map((tech) => (
                        <div key={tech} className="skills-inside-hover-effect">
                            <img src={`https://cdn.simpleicons.org/${tech}`} alt={tech} width={50} height={50} />
                            <h2>{tech.toUpperCase()}</h2>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Languages Skills */}
                <div className="skills-outside-hover-effect p-5 bg-gray-500/50 rounded-2xl">
                    <h1 className="underline mb-4 text-4xl">Languages</h1>
                    <div className="adaptable-skills-grid">
                        {["python", "c", "c++", "javascript"].map((tech) => (
                        <div key={tech} className="skills-inside-hover-effect">
                            <img src={`https://cdn.simpleicons.org/${tech}`} alt={tech} width={50} height={50} />
                            <h2>{tech.toUpperCase()}</h2>
                        </div>
                        ))}
                        
                        {/* Java Icon from the `/public/` folder */}
                        <div className="skills-inside-hover-effect">
                            <img src="/java.png" alt="Java" width={50} height={50} />
                            <h2>JAVA</h2>
                        </div>
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="skills-outside-hover-effect p-5 bg-gray-500/50 rounded-2xl">
                    <h1 className="underline mb-4 text-4xl">Soft Skills</h1>
                    <div className="adaptable-skills-grid">
                        {["troubleshooter", "fast-learner", "fast-typist", "hardworking", "communication", "teamwork", "leadership"].map((tech) => (
                        <div key={tech} className="skills-inside-hover-effect">
                            <p alt={tech} /> 
                            <h2>{tech.toUpperCase()}</h2>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

             {/* Achievements Section */}
            <div className="m-4 min-h-screen">
                <h1 className="text-4xl mb-4 text-center">My Achievements</h1>
                <div className="adaptable-grid-cols-size">
                    <div className="transition duration-300 hover:scale-110"><Image src="/Fall 2020.png" alt="Fall 2020" width={400} height={400} /></div>
                    <div className="transition duration-300 hover:scale-110"><Image src="/Spring 2021.png" alt="Spring 2021" width={400} height={400} /></div>
                    <div className="transition duration-300 hover:scale-110"><Image src="/Fall 2023.png" alt="Fall 2023" width={400} height={400} /></div>
                    <div className="transition duration-300 hover:scale-110"><Image src="/Spring 2023.png" alt="Spring 2023" width={400} height={400} /></div>
                    <div className="transition duration-300 hover:scale-110"><Image src="/Fall 2024.png" alt="Fall 2024" width={400} height={400} /></div>
                    <div className="transition duration-300 hover:scale-110"><Image src="/Spring 2024.png" alt="Spring 2024" width={400} height={400} /></div>
                </div>
            </div>

           {/* Certificates Section */}
            <div className="m-4 min-h-screen">
                <h1 className="text-4xl text-center mb-10">Certificates</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    <div>
                        <Carousel title="Machine Learning Specialization" images={courseraMachineLearningSpecializationImages} />
                    </div>
                    <div>
                        <Carousel title="Python For Everybody Specialization" images={courseraPythonSpecializationImages} />
                    </div>
                    <div>
                        <Carousel title="Google CyberSecurity Professional" images={courseraGoogleCyberSecurityImages} />
                    </div>
                    <div>
                        <Carousel title="HackerRank" images={hackerRankImages} />
                    </div>
                    <div>
                        <Carousel title="SoloLearn" images={soloLearnImages} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="transition duration-300 hover:scale-105"><Image src="/Postman - Postman API Fundamentals Student Expert.png" alt="Postman" width={150} height={150} /></div>                   
                </div>  
            </div>

          

            {/* Resume Section */}
            <div className="mt-20">
                <h1 className="text-4xl">My Resume</h1>
                <div className="flex justify-center mt-2 mb-5">
                    <a href="/Kery Severino Diaz_Resume.pdf" download>
                        <button className="button-style">Download PDF</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
}