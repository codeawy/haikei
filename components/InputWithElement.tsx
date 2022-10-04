import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";

interface IProps {
  leftTxt: string;
  rightTxt: string;
  placeholder: string;
  maxLength?: number;
  name: string;
  value: number | string;
  onChange: (event: any) => void;
}

const InputWithElement: React.FC<IProps> = ({
  leftTxt,
  rightTxt,
  placeholder,
  name,
  value,
  onChange,
  maxLength = 6,
}) => {
  return (
    <InputGroup bg="#303030" rounded="lg">
      <InputLeftElement bg="transparent" border="none" fontSize={12} color="grayText">
        {leftTxt}
      </InputLeftElement>
      <Input
        type="string"
        border="none"
        maxLength={maxLength}
        focusBorderColor="purple.200"
        placeholder={placeholder}
        boxShadow="lg"
        fontSize={13}
        name={name}
        value={value}
        onChange={onChange}
      />
      <InputRightElement bg="transparent" border="none" fontSize={12} color="grayText">
        {rightTxt}
      </InputRightElement>
    </InputGroup>
  );
};

export default InputWithElement;
