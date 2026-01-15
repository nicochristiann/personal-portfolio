import { useState } from "react";
import { Button } from "./Button";
import emailjs from "@emailjs/browser";
import {
  Building2,
  CheckCircle,
  IdCard,
  Mail,
  UserRound,
  XCircle,
} from "lucide-react";

interface StatusProps {
  type: string | null;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<StatusProps>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS config is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          position: formData.position,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Email sent successfully. Thank you for contacting!",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        message: "",
      });
    } catch (error: any) {
      console.log("EmailJS Error: ", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send message. Try again later!",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="glass shadow-lg shadow-primary/30 p-8 rounded-3xl border border-primary/30 animation-fade-in animation-delay-300">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6"
        autoComplete="off"
      >
        <div className="">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <div className="relative">
            <input
              id="name"
              type="text"
              required
              placeholder="Input your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full pl-4 pr-14 py-3 bg-primary/8 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <UserRound className="absolute right-4 top-3 text-primary" />
          </div>
        </div>
        <div className="">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              required
              placeholder="example@mail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full pl-4 pr-14 py-3 bg-primary/8 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <Mail className="absolute right-4 top-3 text-primary" />
          </div>
        </div>
        <div className="">
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company
          </label>
          <div className="relative">
            <input
              id="company"
              type="text"
              required
              placeholder="Input your company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full pl-4 pr-14 py-3 bg-primary/8 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <Building2 className="absolute right-4 top-3 text-primary" />
          </div>
        </div>

        <div className="">
          <label htmlFor="position" className="block text-sm font-medium mb-2">
            Position
          </label>
          <div className="relative">
            <input
              id="position"
              type="text"
              required
              placeholder="Input your position"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              className="w-full pl-4 pr-14 py-3 bg-primary/8 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
            <IdCard className="absolute right-4 top-3 text-primary" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            rows={6}
            id="message"
            required
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 bg-primary/8 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
          />
        </div>

        <Button
          className="w-full col-span-1 md:col-span-2"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <span className="loader"></span> : "Send Message"}
        </Button>

        {submitStatus.type && (
          <div
            className={`flex items-center gap-3 p-3 rounded-xl 
          ${
            submitStatus.type === "success"
              ? "bg-green-500/20 border border-green-500/30 text-green-400"
              : "bg-red-500/20 border border-red-500/30 text-red-400"
          }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="w-4 h-4 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 shrink-0" />
            )}
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};
