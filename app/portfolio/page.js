"use client";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = ["Café Bloom", "Freelancer Portfolio", "Startup Landing Page", "Local Gym Site", "Event Promo Page", "Agency Microsite"];
  return (
    <main className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="text-white-600 mb-12">Here are a few projects I’ve built for clients and personal work.</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((title, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-black-100 rounded-2xl p-6 shadow">
            <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>
            <h4 className="font-semibold mb-2">{title}</h4>
            <p className="text-grey-600 text-sm mb-2">Fast-loading, SEO-optimized static site with clean design.</p>
            <a href="#" className="text-blue-600 text-sm font-medium">View Live →</a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
