import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <>
      <section className="relative lg:pt-12 xl:pt-32 pb-0 lg:pb-32 flex items-center overflow-hidden cursor-default">
        {/* Background */}
        <div className="fixed inset-0">
          <img
            src="/backgroung-img.jpg"
            alt="bg"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Dots */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, index) => {
            const size = 2 + Math.random() * 4;
            return (
              <div
                key={index}
                className="absolute rounded-full opacity-60"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: "#ffffff",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `slow-move ${
                    15 + Math.random() * 20
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Socials */}
              <div className="flex items-center gap-4 animation-fade-in md:justify-center lg:justify-start">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/nicochristiann",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/nico-christiann/",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/nicoo.christiann?igsh=MTFrOG90cDY4bmV3",
                  },
                ].map((social, idx) => (
                  <a
                    href={social.href}
                    key={idx}
                    target="_blank"
                    className="p-2 rounded-full border-primary/30 glass hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
                    {<social.icon className="w-8 h-8" />}
                  </a>
                ))}
              </div>
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-center md:text-6xl lg:text-left lg:text-7xl font-bold leading-tight animation-fade-in animation-delay-100">
                  Building{" "}
                  <span className="text-primary font-normal glow-text">
                    seamless
                  </span>
                  <br />
                  interfaces with
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    consistency.
                  </span>
                </h1>
                <p className="text-lg md:text-center lg:text-left md:max-w-none text-muted-foreground max-w-lg animation-fade-in animation-delay-200">
                  Hi, I’m Nico Christian, a software developer specializing in
                  modern frontend technologies like React, Next.js, and
                  TypeScript to create reliable and user-friendly web
                  applications.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 animation-fade-in animation-delay-300 md:justify-center lg:justify-start">
                <Button size="lg">
                  Contact Me <ArrowRight />
                </Button>
                <a href="/CV-Nico_Christian.pdf" download>
                  <Button size="lg" variant="secondary">
                    <Download />
                    Download CV
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative animation-fade-in animation-delay-400">
              {/* Profile Image */}
              <div className="relative max-w-md mx-auto animation-float">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                <div className="relative glass rounded-2xl p-1 glow-border">
                  <img
                    src="/profile.jpeg"
                    alt="Nico Christian"
                    className="w-full aspect-3/4 object-cover rounded-xl"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 animation-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Open to work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
