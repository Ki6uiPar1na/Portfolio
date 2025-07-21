import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // ✅ Correct Google Form endpoint
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeiARxamxAou1_llOCXcPqaiQKwXU4BKuldagMwT1GXEarNMQ/formResponse";

  const formData = new FormData();
  formData.append("entry.880883838", name);     // Name field entry ID
  formData.append("entry.1015543259", email);    // Email field entry ID
  formData.append("entry.2090079769", message);  // Message field entry ID

  try {
    await fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    form.reset();
  } catch (error) {
    toast({
      title: "Error!",
      description: "Failed to send message. Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project idea, need help, or just want to connect? Feel free to
          drop a message — I’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:Ki6uiPar1na@proton.me"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ki6uiPar1na@proton.me
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+88001609-853998"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1609-853998
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Mymensingh, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons centered */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-left">Connect With Me</h4>
              <div className="flex space-x-4 item-left">
                <a
                  href="https://linkedin.com/in/md-khairul-islam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/Ki6uiPar1na"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://twitter.com/khairul_cse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://instagram.com/khairul.codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Khairul, I wanted to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
