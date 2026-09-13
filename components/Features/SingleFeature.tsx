"use client";
import { Feature } from "@/types/feature";
import Reveal from "@/components/Common/Reveal";

const SingleFeature = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const { icon, tag, title, description, accent, featured, highlights } =
    feature;

  if (featured) {
    return (
      <Reveal
        direction="up"
        delay={0.08 * index}
        className="group relative overflow-hidden rounded-[28px] bg-slate-900 p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:p-10"
      >
        {/* soft glow (parallaxes gently via ScrollSmoother data-speed) */}
        <div
          data-speed="0.85"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/30 blur-3xl transition-transform duration-500 group-hover:scale-125"
        />
        <div
          data-speed="1.1"
          className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl"
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 [&>svg]:h-7 [&>svg]:w-7">
              {icon}
            </div>
            {tag && (
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                {tag}
              </span>
            )}
          </div>

          <h3 className="mt-8 text-2xl font-bold leading-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 max-w-md leading-7 text-slate-300">{description}</p>

          {highlights && highlights.length > 0 && (
            <ul className="mt-auto flex flex-wrap gap-2 pt-8">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal
      direction="up"
      delay={0.08 * index}
      className="group flex flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 [&>svg]:h-7 [&>svg]:w-7 ${accent ?? "bg-slate-100 text-slate-700"}`}
        >
          {icon}
        </div>
        {tag && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {tag}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Reveal>
  );
};

export default SingleFeature;
