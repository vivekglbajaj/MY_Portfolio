import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const fullName = "Vivek Kumar"; // 👈 your name
  const [displayName, setDisplayName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;

    const handleTyping = () => {
      if (!isDeleting && index < fullName.length) {
        setDisplayName(fullName.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayName(fullName.slice(0, index - 1));
        setIndex(index - 1);
      } else if (index === fullName.length) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, fullName]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* Passport-size photo */}
        <div className="flex justify-center mb-6">
          <img
            src="/vivek_photo.jpeg" // 👈 place your photo inside /public folder
            alt="Vivek Kumar"
            className="w-28 h-28 rounded-full border-4 border-primary shadow-lg object-cover animate-pulse"
          />
        </div>

        <div className="space-y-6">
          {/* Typing effect name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary ml-2">
              {displayName}
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full-Stack Developer with expertise in Java, Spring Boot, React, and AI/ML.  
            I build scalable web applications and AI-powered solutions that solve real-world problems.
          </p>

          {/* Call-to-action button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
