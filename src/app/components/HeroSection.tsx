"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col bg-blue-950 text-white">
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-start z-10">
        <div className="max-w-2xl text-left p-6 ml-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Instant collaboration for remote teams
          </h1>
          {/* Responsive heading */}
          <p className="text-sm sm:text-base md:text-lg mb-6">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </p>
          {/* Responsive text */}
          <div className="flex flex-col sm:flex-row items-center justify-start md:justify-start">
            <input
              type="email"
              placeholder="Email"
              className="p-3 sm:p-4 rounded-l sm:rounded-r-none bg-white text-black w-full sm:w-64 mb-4 sm:mb-0"
            />
            {/* Responsive input */}
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-r sm:rounded-l-none flex items-center w-full sm:w-auto">
              <span>Get Early Access</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.svg"
          alt="Woman using a tablet in a modern office hallway"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
    </div>
  );
}
