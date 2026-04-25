const steps = [
  {
    id: 1,
    title: "Message on WhatsApp",
    description:
      "Click the Order button and send us a message with your details.",
    color: "bg-emerald-500",
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Confirm Order",
    description:
      "Share your address and choose payment method (COD/Online).",
    color: "bg-blue-500",
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "We Process",
    description: "Your order is carefully packed and dispatched.",
    color: "bg-violet-500",
    icon: (
      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Delivered!",
    description: "Receive your Yamani Laptop at your doorstep.",
    color: "bg-green-500",
    icon: (
      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5M5 8h12v8H5V8m17-4h-3V3H5v1H2v2h1v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7h1V4z" />
      </svg>
    ),
  },
]

export default function OrderSteps() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            Easy Process
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            How to Order
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Order your Yamani Laptop in just 4 simple steps via WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl shadow-sm">
                <div className={`${step.color} absolute inset-0 rounded-3xl`} />
                <div className="relative z-10">{step.icon}</div>
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-lg">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
