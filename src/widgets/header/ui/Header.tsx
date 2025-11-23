"use client";

import { Code2, Github, Send } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 px-4 py-3 pt-0 ">
      <div className="relative mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-linear-to-r bg-[#8A2BE208] backdrop-blur-xl "
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)",
            }}
          />

          <div
            className="absolute inset-0 bg-linear-to-r from-purple-600/10 via-transparent to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)",
            }}
          />

          <nav className="relative flex items-center justify-between px-8 py-4">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Code2 className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <span className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 tracking-wide">
                Frontend
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/projects"
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group"
              >
                Проекты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>

              <button className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 relative group">
                en
                <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-md transition-all duration-300" />
              </button>

              <div className="w-px h-6 bg-neutral-700 mx-1" />

              <Link
                href="https://t.me/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 relative group"
              >
                <Send className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-200" />
                <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-md transition-all duration-300" />
              </Link>

              <Link
                href="https://github.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 relative group"
              >
                <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-200" />
                <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-md transition-all duration-300" />
              </Link>
            </div>
          </nav>

          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"
            style={{
              clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </div>
    </header>
  );
};
