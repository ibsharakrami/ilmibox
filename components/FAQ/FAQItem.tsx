import { ChevronDown } from "lucide-react";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const isOpen = activeFaq === id;

  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-emerald-300 bg-emerald-50/60"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <button
        type="button"
        onClick={() => handleFaqToggle(id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-900 md:text-lg"
      >
        <span>{quest}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* grid-rows trick gives a smooth height animation without measuring */}
      <div
        id={`faq-answer-${id}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-7 text-slate-600">{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
