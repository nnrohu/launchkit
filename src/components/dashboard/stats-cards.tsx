"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FolderOpen,
  HardDrive,
  Users,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    description: "+2 this month",
    icon: FolderOpen,
  },
  {
    title: "Storage Used",
    value: "2.4 GB",
    description: "of 10 GB",
    icon: HardDrive,
  },
  {
    title: "Team Members",
    value: "5",
    description: "2 pending invites",
    icon: Users,
  },
  {
    title: "API Calls",
    value: "14.2k",
    description: "+12% from last month",
    icon: Activity,
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
