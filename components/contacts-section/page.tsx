import React from "react";
import Link from "next/link";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full py-20 px-10 md:px-20 flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-12">
        Get In Touch
      </h2>

      <div className="max-w-2xl">
        <p className="text-lg text-black mb-8">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="space-y-6">
          {/* Email */}
          <Link
            href="mailto:orfianamir@gmail.com"
            className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-3 bg-secondary-green/20 rounded-full group-hover:bg-secondary-green/30 transition-colors">
              <Mail className="text-primary-green" size={24} />
            </div>
            <div>
              <p className="text-sm text-black font-medium">Email</p>
              <p className="text-primary-green font-semibold group-hover:text-secondary-green transition-colors">
                orfianamir@gmail.com
              </p>
            </div>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+639209465218"
            className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-3 bg-secondary-green/20 rounded-full group-hover:bg-secondary-green/30 transition-colors">
              <Phone className="text-primary-green" size={24} />
            </div>
            <div>
              <p className="text-sm text-black font-medium">Phone</p>
              <p className="text-primary-green font-semibold group-hover:text-secondary-green transition-colors">
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
              className="p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github
                className="text-primary-green group-hover:text-secondary-green transition-colors"
                size={28}
              />
            </Link>

            <Link
              href="https://upwork.com/freelancers/~yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 group"
              aria-label="Upwork"
            >
              <FaUpwork
                className="text-primary-green group-hover:text-secondary-green transition-colors"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
