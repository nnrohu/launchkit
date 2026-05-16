import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LaunchKit — Build your SaaS in days, not months",
    template: "%s | LaunchKit",
  },
  description:
    "A production-ready SaaS boilerplate with Next.js, auth, payments, and a beautiful dashboard. Ship your SaaS product faster.",
  keywords: [
    "SaaS",
    "boilerplate",
    "starter kit",
    "Next.js",
    "TypeScript",
    "Stripe",
    "authentication",
  ],
  authors: [{ name: "LaunchKit" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://launchkit.dev",
    siteName: "LaunchKit",
    title: "LaunchKit — Build your SaaS in days, not months",
    description:
      "A production-ready SaaS boilerplate with Next.js, auth, payments, and a beautiful dashboard.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchKit — Build your SaaS in days, not months",
    description:
      "A production-ready SaaS boilerplate with Next.js, auth, payments, and a beautiful dashboard.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
