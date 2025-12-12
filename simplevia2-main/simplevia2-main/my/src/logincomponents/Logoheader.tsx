// src/components/LogoHeader.tsx
import { Center, Text } from "@mantine/core";
import loginLogo from "/logo.png";

export function LogoHeader() {
  return (
    <Center mb="md" style={{ flexDirection: "column" }}>
      <img
        src={loginLogo}
        alt="SPCF Logo"
        style={{
          width: 360,
          height: 90,
          objectFit: "contain",
        }}
      />
      <div style={{ height: 15 }} />
      <Text fz="sm" fw={700} c="blue" mt={4}>
        System Plus College Foundation
      </Text>
    </Center>
  );
}
