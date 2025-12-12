// src/components/PrimaryButton.tsx
import { Button } from "@mantine/core";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PrimaryButton({ children, type = "button", onClick }: PrimaryButtonProps) {
  return (
    <Button
      fullWidth
      radius="sm"
      size="sm"
      color="blue"
      style={{ fontWeight: 600 }}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
