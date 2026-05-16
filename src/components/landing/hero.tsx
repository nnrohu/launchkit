import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
            </span>
            Now with Next.js 16 &amp; Tailwind v4
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build your SaaS in{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              days, not months
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed sm:text-xl">
            A production-ready boilerplate with authentication, payments, database,
            and a beautiful UI. Skip the boilerplate, ship your product.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/register" />}>
              Get Started Free
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="https://github.com/yourusername/launchkit" />}>
              <Code className="size-4" />
              View on GitHub
            </Button>
          </div>

          {/* Tech stack pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            {["Next.js 16", "Tailwind v4", "Better Auth", "Stripe", "Drizzle ORM", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-1"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Code preview */}
        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-border/60 bg-card/50 p-1 shadow-2xl shadow-primary/5">
          <div className="flex items-center gap-1.5 border-b border-border/40 px-3 py-2">
            <div className="size-2.5 rounded-full bg-red-500/80" />
            <div className="size-2.5 rounded-full bg-yellow-500/80" />
            <div className="size-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-muted-foreground">terminal</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code>
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">npx create-next-app@latest my-saas</span>
              {"\n"}
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">cd my-saas && npm run dev</span>
              {"\n\n"}
              <span className="text-green-500">✓</span>{" "}
              <span className="text-muted-foreground">Auth configured</span>
              {"\n"}
              <span className="text-green-500">✓</span>{" "}
              <span className="text-muted-foreground">Stripe payments ready</span>
              {"\n"}
              <span className="text-green-500">✓</span>{" "}
              <span className="text-muted-foreground">Database schema generated</span>
              {"\n"}
              <span className="text-green-500">✓</span>{" "}
              <span className="text-muted-foreground">Dashboard &amp; landing page built</span>
              {"\n\n"}
              <span className="text-primary">Ready!</span>{" "}
              <span className="text-muted-foreground">http://localhost:3000</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
