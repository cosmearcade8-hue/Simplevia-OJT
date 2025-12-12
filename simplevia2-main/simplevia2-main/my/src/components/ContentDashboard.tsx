// src/components/ContentDashboard.tsx
import { Container, SimpleGrid, Paper, Badge, Group, Text } from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import { AlarmClock, StickyNote, UserCheck } from "lucide-react";
import classes from "./StatsGrid.module.css";
import React from "react";

type IconComponent = React.ComponentType<{
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}>;

type Stat = {
  title: string;
  icon: IconComponent;
  value: string;
  diff: number;
  color: string;
};

const data: Stat[] = [
  { title: "Applications Received",  icon: StickyNote, value: "8192", diff: 16, color: "#2563eb" },
  { title: "Applications Processed", icon: UserCheck,  value: "6144", diff: 13, color: "#16a34a" },
  { title: "Applications Pending",   icon: AlarmClock, value: "2048", diff: 18, color: "#f59e0b" },
];


function StatsGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" w="100%" mt={10}>
      {data.map((stat) => {
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
        const diffColor = stat.diff > 0 ? "green" : "red";

        return (
          <Paper key={stat.title} withBorder radius="md" p="lg" className={classes.card}>
            {/* ✅ LAKI + BOLD */}
            <Text className={classes.value} c={stat.color}>
              {stat.value}
            </Text>

            <Group justify="space-between">
              {/* ✅ title same size as percent */}
              <Text className={classes.label}>{stat.title}</Text>

              {/* maliit na icon beside title */}
              <stat.icon size={26} color={stat.color} />
            </Group>

            {/* ✅ percent text smaller */}
            <Badge
              className={classes.badge}
              variant="light"
              color={diffColor}
              leftSection={<DiffIcon size={14} />}
              radius="sm"
              
            >
              {stat.diff}% THIS MONTH
            </Badge>
          </Paper>
        );
      })}
    </SimpleGrid>
  );
}

export function ContentDashboard() {
  return (
    <Container size={1900} px="md" pt={88} pb="xl">
      <Paper withBorder radius="sm" p="xs" mb="md">
        <Text fw={700} size="sm">Dashboard</Text>
      </Paper>

      <StatsGrid />
    </Container>
  );
}
