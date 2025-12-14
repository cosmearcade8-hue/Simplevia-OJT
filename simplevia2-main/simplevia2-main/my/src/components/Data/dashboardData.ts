// src/Data/dashboardData.ts
import type React from "react";
import { AlarmClock, StickyNote, UserCheck } from "lucide-react";

export const dashboardData: Array<{
  title: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
  }>;
  value: string;
  diff: number;
  color: string;
}> = [
  { title: "Applications Received",  icon: StickyNote, value: "8192", diff: 16, color: "#2563eb" },
  { title: "Applications Processed", icon: UserCheck,  value: "6144", diff: 13, color: "#16a34a" },
  { title: "Applications Pending",   icon: AlarmClock, value: "2048", diff: 18, color: "#f59e0b" },
];
