// src/components/TextInput.tsx
import { TextInput } from "@mantine/core";

type LabeledTextInputProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void; // string lang ang hinihingi sa parent
};

export function LabeledTextInput({
  label,
  required,
  placeholder,
  value,
  onChange,
}: LabeledTextInputProps) {
  return (
    <TextInput
      label={label}
      required={required}
      placeholder={placeholder}
      value={value}
      size="sm"
      radius="sm"
      onChange={(event) => onChange(event.currentTarget.value)} // 👈 dito na yung event
    />
  );
}
