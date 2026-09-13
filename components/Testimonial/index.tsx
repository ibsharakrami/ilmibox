"use client";
import { Heart, Star, Users, Sparkles, Baby } from "lucide-react";
import Reveal from "@/components/Common/Reveal";

const photos = [
  {
    src: "/images/deen/child1.jpeg",
    alt: "Two children smiling with their Yamani Laptop boxes",
    caption: "Unboxing day",
    note: "The excitement starts before the laptop is even switched on.",
    span: "lg:col-span-7",
  },
  {
    src: "/images/deen/child2.jpg",
    alt: "Children using the Yamani Laptop together at home",
    caption: "Learning together",
    note: "Surahs, Duas and quizzes that kids come back to on their own.",
    span: "lg:col-span-5",
  },
];

const stats = [
  { icon: Users, value: "250+", label: "Happy families" },
  { icon: Star, value: "4.8", label: "Customer rating", stars: true },
  { icon: Sparkles, value: "50+", label: "Learning activities" },
  { icon: Baby, value: "3+", label: "Years age group" },
];

const Testimonial = () => {
  return (
    <section id="happy-customers" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Header */}
        <Reveal direction="up" className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
            Happy Customers
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Kids Love It!
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            See the joy on children&apos;s faces as they learn and play with the
            Yamani Laptop.
          </p>
        </Reveal>

        {/* Photo gallery */}
        <div className="grid gap-6 lg:grid-cols-12">
          {photos.map((photo, index) => (
            <Reveal
              as="figure"
              key={photo.src}
              direction="up"
              delay={0.1 * index}
              className={`group relative overflow-hidden rounded-[28px] bg-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${photo.span}`}
            >
              <div className="relative h-80 sm:h-[440px]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* gradient for caption legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
              </div>

              {/* badge */}
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-semibold text-amber-700 shadow-sm backdrop-blur">
                <Heart className="h-4 w-4 fill-amber-500 text-amber-500" />
                Loved by kids
              </span>

              {/* caption */}
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xl font-semibold sm:text-2xl">{photo.caption}</p>
                <p className="mt-1 max-w-md text-sm leading-6 text-slate-200 sm:text-base">
                  {photo.note}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* Stats band */}
        <Reveal
          direction="up"
          delay={0.15}
          className="relative mt-8 overflow-hidden rounded-[28px] bg-slate-900 px-6 py-8 text-white sm:px-10"
        >
          <div data-speed="0.85" className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-500/25 blur-3xl" />
          <div data-speed="1.1" className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

          <dl className="relative grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center lg:px-6"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <dd className="mt-4 flex items-center gap-2 text-3xl font-bold leading-none sm:text-4xl">
                    {stat.value}
                    {stat.stars && (
                      <span className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current"
                            aria-hidden
                          />
                        ))}
                      </span>
                    )}
                  </dd>
                  <dt className="mt-2 text-sm text-slate-300">{stat.label}</dt>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonial;
