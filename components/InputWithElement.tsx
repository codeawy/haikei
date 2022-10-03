import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";

interface IProps {
  leftTxt: string;
  rightTxt: string;
  placeholder: string;
}

const InputWithElement: React.FC<IProps> = ({ leftTxt, rightTxt, placeholder }) => {
  return (
    <InputGroup bg="#303030" rounded="lg">
      <InputLeftElement bg="transparent" border="none" fontSize={12} color="grayText">
        {leftTxt}
      </InputLeftElement>
      <Input
        type="string"
        border="none"
        maxLength={6}
        focusBorderColor="purple.200"
        placeholder={placeholder}
        boxShadow="lg"
        fontSize={13}
      />
      <InputRightElement bg="transparent" border="none" fontSize={12} color="grayText">
        {rightTxt}
      </InputRightElement>
    </InputGroup>
  );
};

export default InputWithElement;
