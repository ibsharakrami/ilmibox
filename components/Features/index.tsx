"use client";
import { Sparkles, Baby, Languages, Volume2 } from "lucide-react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import Reveal from "@/components/Common/Reveal";

const stats = [
  { icon: Sparkles, value: "50+", label: "Learning activities" },
  { icon: Baby, value: "3+", label: "Suitable for ages" },
  { icon: Languages, value: "Urdu & Arabic", label: "Bilingual content" },
  { icon: Volume2, value: "Clear audio", label: "Correct pronunciation" },
];

const Feature = () => {
  return (
    <section id="features" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Section header */}
        <Reveal direction="up" className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            What&apos;s Inside
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            50+ Interactive Learning Activities
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Fun and engaging Islamic learning with Surahs, Ahadith, Duas, songs
            and interactive Q&amp;A, made for little hands and curious minds.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <SingleFeature feature={feature} index={index} key={feature.id} />
          ))}
        </div>

        {/* Stats strip */}
        <Reveal
          direction="up"
          delay={0.1}
          className="mt-12 grid grid-cols-2 gap-6 rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-10 lg:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-bold leading-tight text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Feature;
