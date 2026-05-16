"use client";

import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TopBar } from "@/components/dashboard/top-bar";

const { useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!session?.user) {
    router.push("/login");
    return null;
  }

  const handleSignOut = async () => {
    const { signOut } = createAuthClient({
      baseURL: process.env.NEXT_PUBLIC_APP_URL,
    });
    await signOut();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar user={session.user} />
      <div className="flex-1 flex flex-col">
        <TopBar user={session.user} onSignOut={handleSignOut} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
