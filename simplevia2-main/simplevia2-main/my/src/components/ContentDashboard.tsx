// src/components/ContentDashboard.tsx

import { Container, SimpleGrid, Paper, Badge, Group, Text } from "@mantine/core";

import  {ArrowUpRight, ArrowDownRight} from 'lucide-react';
import classes from "./StatsGrid.module.css";

import { dashboardData } from "./Data/dashboardData";


function StatsGrid() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" w="100%" mt={10}>
      {dashboardData.map((stat) => {
        const DiffIcon = stat.diff > 0 ? ArrowUpRight : ArrowDownRight;
        const diffColor = stat.diff > 0 ? "green" : "red";

        return (
          <Paper
            key={stat.title}
            withBorder
            radius="md"
            p="lg"
            className={classes.card}
          >
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
              w="fit-content"
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
      <Paper
        withBorder
        radius="sm"
        p="xs"
        mb="md"
        style={{ textAlign: "left" }}
      >
        <Text fw={700} size="sm" c="#2563eb" ta="left">
          Dashboard
        </Text>
      </Paper>

      <StatsGrid />
    </Container>
  );
}
