"use client";

import Image from "next/image";

export default function HomeAboutMeSection() {
  return (
    <>
        {/* Intro Section */}
        <div className="min-h-screen pb-20">
            <div className="text-center pb-20 pt-20">
                
                    <h1 className="adaptable-title-size">A LITTLE ABOUT ME</h1>
                <div className="flex justify-center">
                    <Image className="adaptable-img-size rounded-4xl" src="/self-2.png" alt="self-2" width={320} height={200} />
                </div>
            </div>

            {/* About Me Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 m-4 overflow-x-auto p-2">
                {/* Left Column - Text */}
                <div className="p-4 adaptable-text-size">
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
            
            <div className="adaptable-text-size grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 m-4 p-2 ">
            {/* Frontend Skills */}
                <div className="skills-outside-hover-effect p-5 ">
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
                <div className="skills-outside-hover-effect p-5 ">
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
                <div className="skills-outside-hover-effect p-5 ">
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
                <div className="skills-outside-hover-effect p-5 ">
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
                <div className="skills-outside-hover-effect p-5 ">
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
        </div>
    </>
  );
}