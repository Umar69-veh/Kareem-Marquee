"use client";

import React from "react";
import CountUp from "react-countup";
import { Users, CalendarDays, Smile, Award } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { id: 1, icon: Users, value: 1000, suffix: "+", label: "Guests Capacity" },
  { id: 2, icon: CalendarDays, value: 500, suffix: "+", label: "Events Hosted" },
  { id: 3, icon: Smile, value: 100, suffix: "%", label: "Client Satisfaction" },
  { id: 4, icon: Award, value: 1, suffix: "", label: "Premium Destination" },
];

export default function Stats() {
  return (
    <section className="bg-[#1C1C1C] py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            CELEBRATING EXCELLENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            EXPERIENCE COUNTS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-y-12">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`w-1/2 md:w-1/4 flex flex-col items-center border-r border-white/10 last:border-r-0 ${
                  index % 2 !== 0 ? "border-r-0 md:border-r" : ""
                }`}
              >
                <Icon size={32} className="text-brand-gold mb-6" />
                <div className="text-4xl md:text-5xl font-bold font-sans text-brand-gold mb-2">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    formattingFn={(value) => 
                      stat.value === 1 ? `0${value}` : value.toString()
                    }
                  />
                  {stat.suffix}
                </div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
