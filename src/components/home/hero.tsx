"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link"; 
import Image from "next/image";

const roles = ["Full-Stack Engineer", "ML Enthusiast"];

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          currentRole.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Text Column */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-secondary font-mono text-lg mb-4">
              Hello, welcome to my portfolio.
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-foreground">
              Hi, I’m <span className="text-primary">Feben</span>.
              <br />
              <span className="text-xl md:text-3xl lg:text-4xl text-muted mt-2 block font-sans font-medium">
                Software Engineer & Machine Learning Enthusiast
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-8 md:h-12 flex items-center font-mono text-xl md:text-3xl text-secondary"
          >
            <span>{">"} </span>
            <span className="ml-2">{text}</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-6 md:h-8 bg-primary ml-1 block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/resume.pdf" download>
                Download CV
                <Download className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Image Column - Hidden on mobile, visible on desktop */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="hidden md:flex justify-center md:justify-end relative"
        >
          {/* Unique Animated Background Motion */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 20, ease: "linear" },
              scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
            }}
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl"
          />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden border-2 border-primary/30 bg-surface/30 backdrop-blur-sm shadow-2xl"
          >
             <Image
              src="/profile.png"
              alt="Feben Getachew"
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-12 h-12 border-2 border-primary/40 rounded-lg rotate-12" 
          />
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 w-16 h-16 border border-secondary/30 rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
}
