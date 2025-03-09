function HomeAboutMeSection(){
    return(
        <>
            {/* Intro Text */}
            <div className="min-h-screen pb-20">
                <div className="flex justify-center pb-20 pt-20">
                    <div className="text-6xl">
                        <p>
                        <h1> A LITTLE <br/> ABOUT ME </h1> 
                        </p>
                    </div>
                    <div className="m-4">
                        <img className="w-64 h-64" src="/src/assets/coding-cartoon.png" alt="ComputerSetUpPhoto"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-4 m-4 overflow-x-auto p-2">
                    {/* Left Column - Text */}
                    <div className="text-2xl p-4">
                        
                        <p> 
                        <p className="animate-bounce"> Hello everyone!  </p><br/>
                            I’m Kery Severino Diaz, originally from the Dominican Republic, and now proud to call New York City my home. 
                            While New York wasn’t exactly what I had envisioned, it’s a place where dreams can come true for those who are willing to put in the hard work and determination – and that’s exactly what I’m planning to do.
                            <br/><br/>
                            My passion for coding began when I was young. Growing up in the Dominican Republic, I often used my mom’s computer for gaming, sparking my love for technology. Whether it was fixing tech issues or assembling furniture, I enjoyed helping others.
                            Now, in college, I’m pursuing my dream of making a positive impact through technology and cats!
                        </p>
                    </div>

                    {/* Right Column - Images */}
                    <div className="flex flex-col items-start gap-4 p-4">
                        <div className="mr-auto img-hover-scale-effect">
                            <img className="w-80 h-50" src="src/assets/newyorkcity.jpg" alt="ComputerSetUpPhoto"/>
                        </div>
                        <div className="mx-auto img-hover-scale-effect">
                            <img className="w-50 h-30" src="src/assets/Flag-Dominican-Republic.jpg" alt="ComputerSetUpPhoto"/>
                        </div>
                        <div className="ml-auto img-hover-scale-effect">
                            <img className="w-80 h-50" src="src/assets/lehman-college.jpeg" alt="ComputerSetUpPhoto"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="min-h-screen pb-20 pt-20">
                <div className="flex justify-center">
                    <h1 className="text-4xl"> My Skills </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 m-4 overflow-x-auto p-2">
                    <div className="skills-outside-hover-effect p-5 ">
                        <h1 className="text-2xl underline mb-4 text-center">Frontend</h1>
                        {/* Create a grid layout with 2 columns */}
                        <div className="grid grid-cols-2 gap-4 p-4 text-center overflow-x-auto">
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/html5" alt="HTML5 Logo" width="50"/>
                                <h2>HTML</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/css3" alt="CSS3 Logo" width="50"/>
                                <h2>CSS</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript Logo" width="50"/>
                                <h2>JavaScript</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/react" alt="React Logo" width="50"/>
                                <h2>React</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/bootstrap" alt="Bootstrap Logo" width="50"/>
                                <h2>Bootstrap</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS Logo" width="50"/>
                                <h2>Tailwind</h2>
                            </div>
                        </div>
                    </div>

                    <div className="skills-outside-hover-effect p-5">
                        <h1 className="text-2xl underline mb-4 text-center">Backend</h1>
                        {/* Create a grid layout with 2 columns */}
                        <div className="grid grid-cols-2 gap-2 p-4 text-center">
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/postgresql" alt="PostgreSQl" width="50" />
                                <h2>PostgreSQL</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/mysql" alt="PostgreSQl" width="50" />
                                <h2>MySQL</h2>
                            </div>  
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/node.js" alt="Node JS" width="50" />
                                <h2>Node JS</h2>
                            </div>  
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/amazonwebservices" alt="Amazon Web Services" width="50" />
                                <h2>Amazon Web Services</h2>
                            </div>  
                        </div>
                    </div>

                    <div className="skills-outside-hover-effect p-5">
                        <h1 className="text-2xl underline mb-4 text-center">Technologies</h1>
                        {/* Create a grid layout with 2 columns */}
                        <div className="grid grid-cols-2 gap-2 p-4 text-center">
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/github" alt="Github" width="50" />
                                <h2>Github</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/git" alt="Git" width="50" />
                                <h2>Git</h2>
                            </div>  
                        </div>
                    </div>

                    <div className="skills-outside-hover-effect p-5">
                        <h1 className="text-2xl underline mb-4 text-center">Languages</h1>
                        {/* Create a grid layout with 2 columns */}
                        <div className="grid grid-cols-2 gap-2 p-4 text-center">
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/python" alt="Python" width="50" />
                                <h2>Python</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="/src/assets/java.png" alt="Java" width="50" />
                                <h2>Java</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/c" alt="C" width="50" />
                                <h2>C</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/c++" alt="C++" width="50" />
                                <h2>C++</h2>
                            </div>  
                            <div className="skills-inside-hover-effect">
                                <img src="https://cdn.simpleicons.org/javascript" alt="Javascript" width="50" />
                                <h2>Javascript</h2>
                            </div>
                        </div>
                    </div>

                    <div className="skills-outside-hover-effect p-5">
                        <h1 className="text-2xl underline mb-4 text-center">Soft Skills</h1>
                        {/* Create a grid layout with 2 columns */}
                        <div className="grid grid-cols-2 gap-2 p-4 text-center">
                            <div className="skills-inside-hover-effect">
                                <h2>Troubleshooter</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <h2>Fast-learner</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <h2>Fast typist</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <h2>Hardworking</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <h2>Communication</h2>
                            </div>  
                            <div className="skills-inside-hover-effect">
                                <h2>Teamwork</h2>
                            </div>
                            <div className="skills-inside-hover-effect">
                                <h2>Leadership</h2>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>


             {/* Achievements Section */}
            <div className="min-h-screen pb-20 pt-20">
                <div className="flex justify-center">
                    <h1 className="text-4xl"> My Achievements </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 m-4 overflow-x-auto p-2">
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/fall 2020.png" width="450"/>
                    </div>

                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/spring 2021.png" width="450"/>
                    </div>

                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/spring 2023.png" width="450"/>
                    </div>

                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/fall 2023.png" width="450"/>
                    </div>

                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/spring 2024.png" width="450"/>
                    </div>
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/fall 2024.png" width="450"/>
                    </div>
                </div>
            </div>
            
            {/* Courses & Certifications Section */}
            <div className="min-h-screen pb-20 pt-20">
                <div className="flex justify-center">
                    <h1 className="text-4xl"> Courses & Certifications </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 m-4 overflow-x-auto p-2">                   
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/Programming for Everybody 1:5.png" width="450"/>
                    </div>
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/Programming for Everybody 2:5.png" width="450"/>
                    </div>
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/Google CyberSecurity Certificate 1:8.png" width="450"/>
                    </div>
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/Google CyberSecurity Certificate 2:8.png" width="450"/>
                    </div>
                    <div className="img-hover-scale-effect flex justify-center">
                        <img src="src/assets/Postman - Postman API Fundamentals Student Expert.png" width="350"/>
                    </div>
                </div>
            </div>
              
        </>
    )
}

export default HomeAboutMeSection;