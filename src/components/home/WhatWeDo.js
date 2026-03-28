"use client";

import { useState } from "react";

const pillars = ["carbon", "esg", "climate", "regulation", "supply_chain", "circular"];

export default function WhatWeDo({ dict, lang }) {
  const [flipped, setFlipped] = useState(null);
  const d = dict.what_we_do;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            {d.title}
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto mb-2">
            {d.subtitle}
          </p>
          <p className="text-primary font-medium">{d.pillars_intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((key) => {
            const pillar = d[key];
            const isFlipped = flipped === key;
            return (
              <div
                key={key}
                className="flip-box h-80 cursor-pointer"
                onMouseEnter={() => setFlipped(key)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => setFlipped(isFlipped ? null : key)}
              >
                <div
                  className={`flip-box-inner relative w-full h-full transition-transform duration-500 ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-dark-slate to-dark rounded-xl text-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 p-6 bg-primary rounded-xl overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-3">
                      {pillar.description}
                    </p>
                    <ul className="space-y-1.5">
                      {pillar.services.map((s, i) => (
                        <li
                          key={i}
                          className="text-white/80 text-xs flex items-start gap-2"
                        >
                          <span className="text-white mt-0.5">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
