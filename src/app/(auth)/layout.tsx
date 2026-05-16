import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-foreground text-background font-bold text-sm">
              L
            </span>
            LaunchKit
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
