"use client";
import { useEffect, useRef } from "react";

export default function ContactComponent() {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/250827147901154";
    script.type = "text/javascript";
    script.async = true;

    if (formRef.current) {
      formRef.current.innerHTML = "";
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden pt-30">
      <div className="z-20 flex flex-col items-center justify-center h-full text-white">
        <h2 className="text-3xl">Get In Touch</h2>
        <p className="ml-10 mr-10 text-gray-200 text-center mt-5">
          Have a project, collaboration, tips, or just want to say hi? Drop me a message!
        </p>

        {/* Embedded Jotform container */}
        <div className="ml-10 mr-10 mt-5 w-full max-w-xl mb-5" ref={formRef} ></div>
      </div>
    </div>
  );
}
