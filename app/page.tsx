"use client";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main >
      <section className="text-center py-20 px-6 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Fast, Beautiful Websites for Small Businesses 🚀
        </motion.h2>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
          I create static websites that are lightning-fast, secure, and SEO-optimized — built to help your business grow online.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/portfolio"><Button variant="outline" className="px-6 py-3 rounded-xl border-black text-cyan-400">📁 View My Work</Button></Link>
        </div>
      </section>
    </main>
  );              
}
