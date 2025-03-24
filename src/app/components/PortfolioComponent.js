import Image from "next/image";
import YoutubeEmbed from "./YoutubeEmbed";

export default function PortfolioComponent() {
  return (
    <>
       {/* Container */}
      <div className="pt-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-4 m-4 gap-4">
          {/* WebDevPortfolio Card */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold">WebDevPortfolio</h1>
            <p className="mt-4">
              This website serves as my Web Development Portfolio, showcasing videos of projects I am proud of. 
              It is a live, evolving platform where I document my work, track my progress, and continuously implement new features as I refine my skills.  

              Initially, I built this site using HTML, CSS, and JavaScript, but I have since migrated to Next.js and Tailwind CSS 
              for improved performance, maintainability, and modern styling. The transition wasn't difficult since I enjoy new technologies 
              and continuosly optimized my projects for future scalability.

              The code for this website is publicly available on GitHub, and it is hosted as a GitHub Page with a custom domain. 
              I followed GitHub's deployment instructions to configure everything.

              This project is a work in progress, and I continuously enhance it to incorporate better functionality, performance, and user experience.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Mar 11, 2025 </p>
          </div>

          {/* Spellbound Game */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">Spellbound</h1>
            <YoutubeEmbed videoId="RA2olD4DC5o" />
            <p className="mt-4">
              This game idea was inspired by Little Red Riding Hood and the Big Bad Wolf. 
              Initially, I struggled to settle on a concept, I had many ideas and kept switching themes. 
              At first, I was working on a wizard-themed game, but it didn’t feel right. 
              After discussing my ideas with friends and seeing their positive reactions, I decided to switch the characters. 
              They loved it! Their enthusiasm and encouragement motivated me to fully commit to this project.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Oct 4, 2023 </p>
          </div>

          {/* Space Shooter */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">Space Shooter</h1>
            <YoutubeEmbed videoId="e7NeBvOhvNs" />
            <p className="mt-4">
              My second Python game using Pygame was a project I had initially abandoned but later decided to revisit.
              Looking back, I’m glad I did it since it turned out to be far more enjoyable than I expected! 
              I had a great time experimenting with collisions, sounds, object oriented programming, and more, 
              which deepened my understanding of game development.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Nov 28, 2023 </p>
          </div>

          {/* Tic-Tac-Toe */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">Tic-Tac-Toe</h1>
            <YoutubeEmbed videoId="_6uoTny1M9o" />
            <p className="mt-4">
              My first Python game using Pygame was a simple Tic-Tac-Toe for two players (X and O).
              It features a result menu with an option to play again,
              where hovering over the selection highlights it, and clicking restarts the game. 
              This project sparked my curiosity and motivated me to dive deeper into game development.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Nov 16, 2023 </p>
          </div>

          {/* File Organizer */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">File Organizer</h1>
            <YoutubeEmbed videoId="yQtbF39NA2A" />
            <p className="mt-4">
              My File Organizer project was born out of the need to tackle the clutter and disorganization on my computer. 
              The primary goal was to create an efficient system that automatically sorts files, 
              transforming a chaotic workspace into a well structured and easily navigable environment.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Oct 18, 2023 </p>
          </div>

          {/* Weather App */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">Weather App</h1>
            <YoutubeEmbed videoId="gxG7Qlq2oLk" />
            <p className="mt-4">
              My weather app project began as an upgrade to an earlier version,
              inspired by feedback from users who saw my video. 
              I greatly appreciate constructive criticism, 
              as it helps me improve my work and avoid repeating the same mistakes. 
              This project has been a valuable learning experience,
              and I’m excited about the possibility of evolving it into a fully functional application in the future.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Oct 16, 2023 </p>
          </div>

          {/* Calculator */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">Calculator</h1>
            <YoutubeEmbed videoId="AsQAWnGRml4" />
            <p className="mt-4">
              My calculator project began as an effort to improve my initial version,
              which lacked a graphical user interface (GUI) and relied solely on print statements. 
              To enhance its functionality and user experience, I integrated Tkinter to create a more visually appealing interface. 
              This project holds a special place for me, as it not only strengthened my coding skills 
              but also became a foundation for experimenting with new features and expanding my understanding of GUI development.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Oct 5, 2023 </p>
          </div>

          {/* Digital Clock */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">Digital Clock</h1>
            <YoutubeEmbed videoId="WynMq7mOCdI" />
            <p className="mt-4">
              My digital clock project began as an experiment while exploring different technologies, this is where Tkinter came in. 
              This project not only helped me grasp the fundamentals of GUI development, 
              but it also inspired me to enhance my calculator project, 
              making it more visually appealing and user-friendly. 
              Through this experience, I learned the basics of Tkinter and how to build simple yet functional applications.
            </p>

            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Oct 4, 2023 </p>
          </div>

          {/* MineSweeper */}
          <div className="portfolio-card-effect">
            <h1 className="font-bold mb-4">MineSweeper</h1>
            <YoutubeEmbed videoId="56W6lcqV9zo" />
            <p className="mt-4">
              One of my first Java projects that I’m truly proud of is MineSweeper! 
              It took me some time to grasp the basics, but after several weeks of work, 
              I successfully built it. I loved working on this project and had a lot of fun 
              throughout the process.  

              While developing it, I even had to learn how to play MineSweeper so I 
              could debug my code effectively, which was an unexpected but cool experience. 
              In the future, I’d love to *evise and improve it with additional features.
            </p>
            <div className="flex justify-center mt-4">
              <Image src="/self.jpg" alt="Profile" className="rounded-full" width={70} height={70} />
            </div>
            <p className="mt-4"> Kery | Oct 4, 2021 </p>
          </div>
        </div>
      </div>
    </>
  );
}