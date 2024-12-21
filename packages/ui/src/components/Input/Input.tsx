import { VStack } from "_panda/jsx";
import { inputLabelStyle, inputStyle } from "./Input.style";
import { InputProps } from "./Input.type";
import { Text } from "../Text";

export const Input = ({ label, size, ...props }: InputProps) => {
  return (
    <VStack gap="0.5rem">
      {label && <label className={inputLabelStyle()}>
        <Text>{label}</Text>
      </label>}
      <input {...props} className={inputStyle({ size })} />
    </VStack>
  );
};
