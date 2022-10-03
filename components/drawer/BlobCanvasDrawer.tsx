import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { toggleOpenDrawerAction } from "app/drawer/drawerSlice";
import { selectShapeDimensionsAction } from "app/features/shapeSlice";
import { useAppDispatch } from "app/hooks";
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
  const dispatch = useAppDispatch();
  const [selectedDimensions, setSelectedDimensions] = useState({ width: 900, height: 450 });

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
                  selectedDimensions.width === value.dimensionsObj.width &&
                  selectedDimensions.height === value.dimensionsObj.height
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
                onClick={() => {
                  setSelectedDimensions(value.dimensionsObj);
                  dispatch(selectShapeDimensionsAction(value.dimensionsObj));
                  dispatch(toggleOpenDrawerAction());
                }}
              >
                <span color="white">{value.aspectRatio}</span>
                <span className="text-grayText">{value.dimensions}</span>
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
                  selectedDimensions.width === value.dimensionsObj.width &&
                  selectedDimensions.height === value.dimensionsObj.height
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
                onClick={() => {
                  setSelectedDimensions(value.dimensionsObj);
                  dispatch(selectShapeDimensionsAction(value.dimensionsObj));
                  dispatch(toggleOpenDrawerAction());
                }}
              >
                <span color="white">{value.aspectRatio}</span>
                <span className="text-grayText">{value.dimensions}</span>
              </Button>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BlobCanvasDrawer;
