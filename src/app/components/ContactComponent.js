export default function ContactComponent() {
    return (
      <>
        <div className="p-10 bg-gray-500 m-20 rounded-3xl text-center">
            <h1 className="text-3xl font-bold">Contact</h1>
            <p>
                Welcome to the contact page! <br /> <br />
                Currently, the available methods to reach me are limited. 
                You can contact me using the following information:
                <br /><br />
            
                <b>Email:</b> KerySeverino@gmail.com
                <br className="sm:hidden" />
                <b> Instagram:</b> @KersevDiaz 
                <br className="sm:hidden" />
                <b> LinkedIn:</b> Kery Severino Diaz
            </p>
        </div>
  
        <hr className="my-10 border-gray-500 w-3/4 mx-auto" />
  
        {/* Resume Section */}
        <div className="text-center">
            <h1 className="text-3xl">My Resume</h1>
            <div className="flex justify-center mt-5">
                <a href="/Kery Severino Diaz_Resume.pdf" download>
                <button className="pdf-download-button">Download PDF</button>
                </a>
            </div>
        </div>
      </>
    );
}
  