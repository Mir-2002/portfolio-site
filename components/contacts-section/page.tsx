import React from "react";
import Link from "next/link";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 lg:py-32 px-10 md:px-20 flex flex-col border-t border-border"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12">
        Get In Touch
      </h2>

      <div className="max-w-2xl">
        <p className="text-lg text-neutral-300 mb-8">
          I&apos;m currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="space-y-6">
          {/* Email */}
          <Link
            href="mailto:orfianamir@gmail.com"
            className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-accent/40 hover:bg-surface-hover transition-all duration-300 group"
          >
            <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
              <Mail className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Email</p>
              <p className="text-accent font-semibold group-hover:text-accent/80 transition-colors">
                orfianamir@gmail.com
              </p>
            </div>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+639209465218"
            className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg hover:border-accent/40 hover:bg-surface-hover transition-all duration-300 group"
          >
            <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
              <Phone className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Phone</p>
              <p className="text-accent font-semibold group-hover:text-accent/80 transition-colors">
                +63 920 946 5218
              </p>
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/Mir-2002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface border border-border rounded-lg hover:border-accent/40 hover:bg-surface-hover transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github
                className="text-accent group-hover:text-accent/80 transition-colors"
                size={28}
              />
            </Link>

            <Link
              href="https://linkedin.com/in/ahmer-macasindel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface border border-border rounded-lg hover:border-accent/40 hover:bg-surface-hover transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin
                className="text-accent group-hover:text-accent/80 transition-colors"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
