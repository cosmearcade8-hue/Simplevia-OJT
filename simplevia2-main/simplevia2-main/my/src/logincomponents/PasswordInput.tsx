// src/components/PasswordInput.tsx
import { PasswordInput } from "@mantine/core";

type LabeledPasswordInputProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void; // string din
};

export function LabeledPasswordInput({
  label,
  required,
  placeholder,
  value,
  onChange,
}: LabeledPasswordInputProps) {
  return (
    <PasswordInput
      label={label}
      required={required}
      placeholder={placeholder}
      value={value}
      size="sm"
      radius="sm"
      onChange={(event) => onChange(event.currentTarget.value)} // 👈 dito na
    />
  );
}
