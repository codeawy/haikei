import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Stack,
  Divider,
  Text,
} from "@chakra-ui/react";
import DrawerHeading from "components/DrawerHeader";
import HeadingTxt from "components/Heading";
import InputWithElement from "components/InputWithElement";
import Horizontal from "components/svg/Horizontal";
import { useState } from "react";
import { canvasHorizontalDimension, canvasVerticalDimension } from "utils/lists";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}

const BlobCanvasDrawer: React.FC<IProps> = ({ isOpen, onClose, btnRef }) => {
  const [selectedHDimensions, setSelectedHDimensions] = useState(0);
  const [selectedVDimensions, setSelectedVDimensions] = useState(0);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
      <DrawerContent bg={"#171717"}>
        <DrawerHeading title="CANVAS" onClose={onClose} />

        <DrawerBody p="0">
          <Stack direction={"column"} spacing="10px" px="5">
            <HeadingTxt txt="DIMENSIONS" color="white" />
            <Stack direction={"row"} spacing="10px">
              <InputWithElement leftTxt="W" rightTxt="px" placeholder="Width" />
              <InputWithElement leftTxt="W" rightTxt="px" placeholder="Height" />
            </Stack>
          </Stack>
          <Divider orientation="horizontal" my={4} borderColor={"grayText"} />

          <Stack direction="column">
            <Stack direction="row" px="5" mb={4}>
              <Horizontal />
              <HeadingTxt txt="HORIZONTAL" others={{ fontSize: 12 }} />
            </Stack>
            {canvasHorizontalDimension.map((value, idx) => (
              <Button
                key={value.aspectRatio}
                variant="ghost"
                width="100%"
                height="36px"
                boxShadow={
                  idx === selectedHDimensions
                    ? "0 0 1px 2px #7443f0bf, 0 1px 1px rgba(0, 0, 0, .15)"
                    : "none"
                }
                _hover={{ bg: "#282828" }}
                className="flex items-center !justify-between"
                _active={{
                  bg: "#282828",
                  transform: "scale(0.98)",
                  borderColor: "#282828",
                }}
                px="5"
                rounded="none"
              >
                <Text fontSize="md" color="white" mb={1}>
                  {value.aspectRatio}
                </Text>
                <Text fontSize="xs" className="text-grayText">
                  {value.dimensions}
                </Text>
              </Button>
            ))}
          </Stack>

          <Divider orientation="horizontal" my={4} borderColor={"grayText"} />

          <Stack direction="column">
            <Stack direction="row" px="5" mb={4}>
              <Horizontal />
              <HeadingTxt txt="VERTICAL" others={{ fontSize: 12 }} />
            </Stack>
            {canvasVerticalDimension.map((value, idx) => (
              <Button
                key={value.aspectRatio}
                variant="ghost"
                width="100%"
                height="36px"
                boxShadow={
                  idx === selectedVDimensions
                    ? "0 0 1px 2px #7443f0bf, 0 1px 1px rgba(0, 0, 0, .15)"
                    : "none"
                }
                _hover={{ bg: "#282828" }}
                className="flex items-center !justify-between"
                _active={{
                  bg: "#282828",
                  transform: "scale(0.98)",
                  borderColor: "#282828",
                }}
                px="5"
                rounded="none"
              >
                <Text fontSize="md" color="white" mb={1}>
                  {value.aspectRatio}
                </Text>
                <Text fontSize="xs" className="text-grayText">
                  {value.dimensions}
                </Text>
              </Button>
            ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button mr={3} onClick={onClose} w={"full"} bg="teal.400" _hover={{ bg: "teal.400" }}>
            Cancel
          </Button>
          <Button bg="purple.500" w={"full"} _hover={{ bg: "purple.500" }}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BlobCanvasDrawer;
