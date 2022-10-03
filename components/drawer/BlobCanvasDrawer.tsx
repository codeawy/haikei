import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import DrawerHeading from "components/DrawerHeader";
import HeadingTxt from "components/Heading";
import InputWithElement from "components/InputWithElement";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}

const BlobCanvasDrawer: React.FC<IProps> = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
      <DrawerContent bg={"#171717"}>
        <DrawerHeading title="CANVAS" onClose={onClose} />

        <DrawerBody p="0">
          <Stack direction={"column"} spacing="10px" pl="5">
            <HeadingTxt txt="DIMENSIONS" color="white" />
            <Stack direction={"row"} spacing="10px">
              <InputWithElement leftTxt="W" rightTxt="px" placeholder="Width" />
              <InputWithElement leftTxt="W" rightTxt="px" placeholder="Height" />
            </Stack>
          </Stack>
          <Divider orientation="horizontal" my={4} borderColor={"grayText"} />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose} w={"full"}>
            Cancel
          </Button>
          <Button colorScheme="blue" w={"full"}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BlobCanvasDrawer;
