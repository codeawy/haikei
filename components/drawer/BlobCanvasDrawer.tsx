import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Input,
} from "@chakra-ui/react";
import DrawerHeading from "components/DrawerHeader";

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

        <DrawerBody>
          <Input placeholder="Type here..." />
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
