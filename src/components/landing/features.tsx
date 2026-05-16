import {
  Shield,
  CreditCard,
  Database,
  Palette,
  Mail,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Shield,
    title: "Authentication",
    description:
      "Email/password, Google, GitHub OAuth with session management, 2FA, and multi-tenant organizations out of the box.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Stripe integration with subscriptions, checkout sessions, webhooks, and a customer portal. Start monetizing on day one.",
  },
  {
    icon: Database,
    title: "Database",
    description:
      "Drizzle ORM with PostgreSQL. Type-safe queries, migrations, and a schema designed for SaaS with users, orgs, and subscriptions.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description:
      "Built with shadcn/ui and Tailwind CSS v4. Dark mode, responsive design, and a polished dashboard that looks professional.",
  },
  {
    icon: Mail,
    title: "Transactional Email",
    description:
      "React Email templates with Resend integration. Welcome emails, password resets, and organization invites work out of the box.",
  },
  {
    icon: Zap,
    title: "Production Ready",
    description:
      "SEO metadata, Open Graph images, rate limiting, security headers, and optimized for deployment on Vercel or any platform.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to launch
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Stop spending weeks on boilerplate. LaunchKit gives you a production-ready
          foundation so you can focus on what makes your product unique.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="relative group border-border/60 bg-card/50 transition-colors hover:bg-card">
            <CardHeader>
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </div>
              <CardTitle className="mt-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
