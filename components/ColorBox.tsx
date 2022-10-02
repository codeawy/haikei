import { Button } from "@chakra-ui/react";

interface IProps {
  bg: string;
}

const ColorBox: React.FC<IProps> = ({ bg }) => {
  return <Button rounded="md" bg={bg} _hover={{ bg }} _focus={{ borderWidth: 3 }} />;
};

export default ColorBox;
