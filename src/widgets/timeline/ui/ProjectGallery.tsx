"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IImageUrl } from "../model/timelineData";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectGalleryProps {
  image: IImageUrl;
}

export const ProjectGallery = ({ image }: ProjectGalleryProps) => {
  const { name, image: imageUrl, url } = image;
  const isClickable = url && url !== "NDA" && url !== "Заморожен";

  return (
    <motion.div
      key={name}
      className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-linear-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={400}
          className="w-full max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {isClickable && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 text-white">
                <ExternalLink className="w-5 h-5" />
                <span className="font-medium">Открыть проект</span>
              </div>
            </div>
          </Link>
        )}
        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300 pointer-events-none" />
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
          <p className="text-xs font-medium text-white">{name}</p>
        </div>
      </div>
    </motion.div>
  );
};
