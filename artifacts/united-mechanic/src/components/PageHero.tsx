"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  image,
  imageAlt,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative bg-zinc-950 py-20 md:py-28 overflow-hidden">
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/50 to-zinc-950 pointer-events-none" />
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {actions && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {actions}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
