"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PlanBadgeProps {
  plan: string;
  className?: string;
}

const planConfig: Record<
  string,
  { label: string; variant: "default" | "secondary" | "outline" }
> = {
  free: { label: "Free", variant: "secondary" },
  pro: { label: "Pro", variant: "default" },
  business: { label: "Business", variant: "default" },
};

export function PlanBadge({ plan, className }: PlanBadgeProps) {
  const config = planConfig[plan] ?? planConfig.free;

  return (
    <Badge
      variant={config.variant}
      className={cn(
        plan === "business" &&
          "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0",
        className
      )}
    >
      {config.label}
    </Badge>
  );
}
