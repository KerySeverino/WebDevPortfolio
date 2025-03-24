export default function ContactComponent() {
    return (
        <>
            {/* Container */}
            <div className="relative h-screen w-full overflow-hidden">

                {/* Contact Form */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-3xl pt-7">
                        Get In Touch
                    </h2>
                    <p className="adaptable-margin-size text-gray-200 text-center mt-5">   
                        Have a project, collaboration, tips, or just want to say hi? Drop me a message!
                    </p>
                    
                    <div className="adaptable-margin-size mt-5">
                        <form action="https://formsubmit.co/keryseverino@gmail.com" method="POST" className="space-y-6 max-w-xl mx-auto mt-5">
                            
                            {/* Thank you page redirect */}
                            <input type="hidden" name="_next" value="https://kersevdiaz.com/thankyou" />

                            {/* Honeypot for bot detection, hidden to humans. */}
                            <input type="text" name="_honey" className="hidden" />
                            

                            <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 rounded bg-gray-800"/>
                            <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 rounded bg-gray-800"/>
                            <textarea name="message" rows="5" required placeholder="Your Message" className="w-full p-3 rounded bg-gray-800"/>
                            
                            <div className="flex justify-center">
                                <button type="submit" className="px-6 py-3 transition duration-150 bg-indigo-500  hover:bg-indigo-600 hover:scale-105  rounded-full">
                                    Send Message
                                </button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
  