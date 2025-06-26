'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaMailBulk, FaTelegram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiMapPin2Fill } from "react-icons/ri";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-900/30 to-blue-900/30 text-foreground font-sans">
      <motion.section
        className="relative py-32 md:py-40 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black-900/30 to-blue-900/30" />
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              G&apos;oyalaringizni <span className="text-blue-400">haqiqatga</span> aylantiramiz
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg">
              Taekon bilan loyihangizni epik darajaga ko&apos;taring!
            </p>
          </motion.div>
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full h-64 md:h-96 rounded-2xl shadow-xl shadow-green-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321310763-4b6f33e0e0f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Taekon Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Taekon haqida</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Taekon — bu raqamli agentlik bo‘lib, web dasturlash, dizayn va marketing xizmatlarini taklif etadi.
              Bizning jamoa sizning biznesingizni yangi cho&apos;qqilarga olib chiqish uchun innovatsion yechimlar yaratadi.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-48 rounded-xl shadow-lg shadow-blue-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321310763-4b6f33e0e0f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
<motion.section
  className="py-20"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-40  items-start">
    <motion.div
      className="relative w-full"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Taekon Video Intro"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </motion.div>
    <div
      className="space-y-6 "
    >
      <h3 className="text-2xl font-semibold">Aloqa</h3>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-center gap-2 cursor-pointer">
          <FaPhone className="w-5 h-5 text-foreground" /> +998 90 123 45 67
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <FaMailBulk className="w-5 h-5 text-foreground" /> info@taekon.uz
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <RiMapPin2Fill className="w-5 h-5 text-foreground" /> Toshkent, Uzbekistan
        </li>
      </ul>

      <div className="pt-4 flex gap-4 text-foreground">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <BsInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram className="w-6 h-6 hover:text-sky-500 transition-colors" />
        </a>
        <a href="https://github.com/taekon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="w-6 h-6 hover:text-zinc-300 transition-colors" />
        </a>
      </div>
    </div>
  </div>
</motion.section>

    </div>
  );
}
