// src/components/VersionText.tsx
import { Text } from "@mantine/core";

interface VersionTextProps {
  version?: string;
}

export function VersionText({ version = "v0.1.0" }: VersionTextProps) {
  return (
    <Text ta="center" fz="xs" c="dimmed" mt="sm">
      {version}
    </Text>
  );
}
