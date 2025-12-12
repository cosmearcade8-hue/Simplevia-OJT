// src/components/FooterBar.tsx
import { Box, Group, Anchor, Text, Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function FooterBar() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box
      component="footer"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        paddingInline: 16,
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        zIndex: 90,
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 8,
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        {/* LEFT LINKS (hidden on mobile) */}
        {!isMobile && (
          <Group gap="xs" wrap="wrap" style={{ flex: "1 1 auto", minWidth: 0 }}>
            <Anchor size="xs" c="dimmed" href="#">Terms of Service</Anchor>
            <Text size="xs" c="gray.5">|</Text>
            <Anchor size="xs" c="dimmed" href="#">Privacy Statement</Anchor>
            <Text size="xs" c="gray.5">|</Text>
            <Anchor size="xs" c="dimmed" href="mailto:info@spcf.edu.ph">info@spcf.edu.ph</Anchor>
          </Group>
        )}

        {/* RIGHT CLUSTER (always visible; centered on mobile) */}
        <Box
          style={{
            marginLeft: isMobile ? 0 : "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <Text size="xs" c="dimmed">Powered by</Text>
          <Image
            src="/footer-logo.png"          // file inside /public
            alt="Scholar Track"
            h={18}
            w="auto"
            fit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
}
