"use client";

import { useEffect, useState } from "react";
import { createAuthClient } from "better-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { PlanBadge } from "@/components/dashboard/plan-badge";
import type { PlanType } from "@/lib/stripe";

const { useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

const recentActivity = [
  { id: 1, action: "Project created", name: "My First Project", time: "Just now" },
  { id: 2, action: "Account created", name: "Welcome!", time: "Today" },
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const user = session?.user;
  const firstName = user?.name?.split(" ")[0] ?? "there";
  const [plan, setPlan] = useState<PlanType>("free");

  useEffect(() => {
    fetch("/api/subscription")
      .then((res) => res.json())
      .then((data) => setPlan(data.plan || "free"))
      .catch(() => setPlan("free"));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {firstName}
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s an overview of your account.
          </p>
        </div>
        <PlanBadge plan={plan} />
      </div>
      <StatsCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-sm text-muted-foreground">{item.name}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can do right now.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="rounded-lg border p-3 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm font-medium">Create new project</p>
              <p className="text-xs text-muted-foreground">
                Start a new project from scratch or a template.
              </p>
            </div>
            <div className="rounded-lg border p-3 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm font-medium">Invite team member</p>
              <p className="text-xs text-muted-foreground">
                Add someone to your organization.
              </p>
            </div>
            <div className="rounded-lg border p-3 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm font-medium">View documentation</p>
              <p className="text-xs text-muted-foreground">
                Learn how to get the most out of LaunchKit.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
