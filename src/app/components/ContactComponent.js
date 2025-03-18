export default function ContactComponent() {
    return (
      <>
        <div className="p-5  bg-gray-500 m-5 rounded-3xl text-center">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p>
                Welcome to the contact page! <br />
                Currently, the available methods to reach me are limited. You can contact me using the following information:
                <br /><br />
            
                <b>Email:</b> KerySeverino@gmail.com <br />
                <b>Instagram:</b> @KersevDiaz <br />
                <b>LinkedIn:</b> Kery Severino Diaz
            </p>
        </div>
  
        <hr className="my-10 border-gray-500 w-3/4 mx-auto" />
  
        {/* Resume Section */}
        <div className="text-center">
            <h1 className="text-4xl">My Resume</h1>
            <div className="flex justify-center mt-5">
                <a href="/Kery Severino Diaz_Resume.pdf" download>
                <button className="pdf-download-button">Download PDF</button>
                </a>
            </div>
        </div>
      </>
    );
}
  