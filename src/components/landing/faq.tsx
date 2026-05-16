import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What tech stack does LaunchKit use?",
    answer:
      "LaunchKit is built with Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui, Better Auth, Drizzle ORM, PostgreSQL, and Stripe. It's a modern, production-ready stack designed for performance and developer experience.",
  },
  {
    question: "Do I need to know all these technologies?",
    answer:
      "Basic knowledge of React, TypeScript, and Next.js is helpful. The codebase is well-structured and documented, so you can learn as you go. We also provide comprehensive documentation and guides.",
  },
  {
    question: "Can I use a different database or auth provider?",
    answer:
      "Yes! The architecture is modular. Drizzle ORM supports multiple databases (PostgreSQL, MySQL, SQLite). Better Auth is framework-agnostic and can be swapped for NextAuth, Clerk, or Auth.js if needed.",
  },
  {
    question: "Is there a free trial for Pro/Business plans?",
    answer:
      "Yes, all paid plans come with a 14-day free trial. No credit card required to start. You can upgrade, downgrade, or cancel at any time from your dashboard.",
  },
  {
    question: "Can I use LaunchKit for client projects?",
    answer:
      "Absolutely. Your license allows you to use LaunchKit for unlimited personal and client projects. You just can't resell the boilerplate itself as a template or starter kit.",
  },
  {
    question: "How do I deploy my SaaS?",
    answer:
      "LaunchKit is optimized for Vercel (one-click deploy), but works on any platform that supports Node.js — Railway, Render, AWS, DigitalOcean, or self-hosted with Docker.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If LaunchKit doesn't meet your expectations, contact us for a full refund — no questions asked.",
  },
  {
    question: "Is the codebase kept up to date?",
    answer:
      "Yes. We actively maintain LaunchKit with regular updates for security patches, dependency upgrades, and new features. Pro and Business plans include priority access to updates.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Everything you need to know about LaunchKit.
        </p>
      </div>

      <Accordion className="mt-10">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
