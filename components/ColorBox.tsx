import { Button, Popover, PopoverArrow, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { HexColorPicker } from "react-colorful";

interface IProps {
  bg: string;
}

const ColorBox: React.FC<IProps> = ({ bg }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button rounded="md" bg={bg} _hover={{ bg }} _focus={{ borderWidth: 3 }} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <HexColorPicker color={"teal"} onChange={() => {}} style={{ width: "100%" }} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorBox;
