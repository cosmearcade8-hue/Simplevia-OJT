// src/components/ForgotPasswordLink.tsx
import { Group, Text } from "@mantine/core";

export function ForgotPasswordLink() {
  return (
    <Group justify="flex-end" mt="xs" mb="md">
      <Text
        component="a"
        href="#"
        fz="xs"
        className="forgot-password-link"
        style={{ textDecoration: "none" }}
      >
        Forgot Password?
      </Text>
    </Group>
  );
}
