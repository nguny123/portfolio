"use client";
import { Button } from ".././components/ui/button";

export default function ServicesPage() {
  const plans = [
    { name: 'Starter', desc: '1-page static site, contact form, mobile optimized', price: '$299' },
    { name: 'Business', desc: '3–5 pages, SEO-ready, analytics setup', price: '$599' },
    { name: 'Premium', desc: 'Up to 10 pages, CMS & animations', price: '$899' }
  ];

  const steps = [
    { step: "Discovery", desc: "Quick call to understand your goals." },
    { step: "Design", desc: "Homepage concept for your review." },
    { step: "Build", desc: "Develop your static site with clean, efficient code." },
    { step: "Launch", desc: "Deploy on Netlify or Vercel, ready to go live." },
  ];

  return (
    <main className="py-20 px-6 text-center bg-black-50">
      <h1 className="text-4xl font-bold mb-4">Services & Pricing</h1>
      <p className="text-blue-200 mb-12">Transparent pricing for every business size.</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-md">
            <h4 className="text-xl text-black font-semibold mb-2">{plan.name}</h4>
            <p className="text-gray-600 mb-4">{plan.desc}</p>
            <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mt-20">Our Process</h1>
      <div className="flex md:grid-cols-4 gap-6 max-w-5xl mt-25 mx-auto">
        {steps.map((item, i) => (
          <div key={i} className="p-6 bg-black-100 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">{item.step}</h4>
            <p className="text-gra-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
