export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo?: string | null;
}

export interface Subscription {
  id: string;
  plan: "free" | "pro" | "business";
  status: string;
  currentPeriodEnd?: Date | null;
  cancelAtPeriodEnd?: boolean;
}
