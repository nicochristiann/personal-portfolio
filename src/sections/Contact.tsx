import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pb-24 relative overflow-hidden cursor-default pt-24"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            Let’s turn{" "}
            <span className="font-serif italic font-normal text-white">
              ideas into impact.
            </span>
          </h2>
          <p className="text-muted-foreground animation-fade-in animation-delay-200">
            Looking to start a project? Let’s connect and talk about how we can
            collaborate.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
