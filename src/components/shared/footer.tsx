import Link from "next/link";
import { Rocket } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/changelog", label: "Changelog" },
  ],
  Resources: [
    { href: "/docs", label: "Documentation" },
    { href: "/blog", label: "Blog" },
    { href: "https://github.com", label: "GitHub" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Rocket className="size-5 text-primary" />
              <span className="text-lg tracking-tight">LaunchKit</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build your SaaS in days, not months. Production-ready boilerplate
              for modern web applications.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-3">
              <h4 className="text-sm font-medium">{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} LaunchKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
