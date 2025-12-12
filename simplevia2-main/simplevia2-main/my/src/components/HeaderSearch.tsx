// src/components/HeaderSearch.tsx
import {
  Group,
  Button,
  Text,
  Box,
  Image,
  ActionIcon,
  Burger,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBell, IconMessageCircle } from "@tabler/icons-react";

export function HeaderSearch() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const menuItems = [
    "Incident Report",
    "Campus/Event",
    "Bulletin Board",
    "Suggestions/Feedback",
  ];

  return (
    <>
      <Box
        component="header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          paddingInline: 16,
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          zIndex: 200,
        }}
      >
        <Group justify="space-between" w="100%" wrap="nowrap">
          {/* LEFT: LOGO + SCHOOL NAME */}
          <Group gap="sm" wrap="nowrap">
            <Image
              src="/logo.png"
              alt="Systems Plus College Foundation"
              h={32}
              w="auto"
              fit="contain"
            />

            {/* Full name on md↑ */}
            <Text
              fw={600}
              size="sm"
              style={{ whiteSpace: "nowrap", letterSpacing: 0.1 }}
              visibleFrom="md"
            >
              Systems Plus College Foundation
            </Text>

            {/* Short name on mobile */}
            <Text
              fw={600}
              size="xs"
              style={{ whiteSpace: "nowrap", letterSpacing: 0.1 }}
              hiddenFrom="md"
            >
              SPCF
            </Text>
          </Group>

          {/* DESKTOP MENU (md and up) */}
          <Group gap="lg" visibleFrom="md">
            <Group gap="lg">
              {menuItems.map((item) => (
                <Text
                  key={item}
                  style={{
                    fontSize: 13,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </Text>
              ))}
            </Group>

            <Group gap="xs">
              <ActionIcon variant="subtle" radius="xl" size="lg">
                <IconMessageCircle size={16} />
              </ActionIcon>
              <ActionIcon variant="subtle" radius="xl" size="lg">
                <IconBell size={16} />
              </ActionIcon>
            </Group>

            <Button
              color="blue"
              radius="xs"
              size="xs"
              style={{ fontSize: 12, fontWeight: 500 }}
            >
              Log out
            </Button>
          </Group>

          {/* MOBILE HEADER (below md) */}
          <Group gap="xs" hiddenFrom="md">
            {/* Burger */}
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              aria-label="Toggle navigation"
            />

            {/* Icons */}
            <ActionIcon variant="subtle" radius="xl" size="lg">
              <IconMessageCircle size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" radius="xl" size="lg">
              <IconBell size={16} />
            </ActionIcon>

            {/* Logout */}
            <Button
              color="blue"
              radius="xs"
              size="xs"
              style={{ fontSize: 11, fontWeight: 500, whiteSpace: "nowrap" }}
            >
              Log out
            </Button>
          </Group>
        </Group>
      </Box>

      {/* MOBILE DROPDOWN MENU */}
      {opened && (
        <Box hiddenFrom="md">
          <Paper
            shadow="sm"
            withBorder
            style={{
              position: "fixed",
              top: 60,
              left: 0,
              right: 0,
              zIndex: 190,
              backgroundColor: "#ffffff",
            }}
          >
            <Box p="sm">
              {menuItems.map((item) => (
                <Box
                  key={item}
                  p="xs"
                  style={{
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                  onClick={close}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
