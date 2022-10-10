import { Stack, Box, Button, Text } from "@chakra-ui/react";
import { selectShape } from "app/features/shapeSlice";
import { useAppSelector } from "app/hooks";
import HeadingTxt from "components/Heading";
import RightArrowIcon from "components/svg/RightArrowIcon";

const CanvasDimensions = ({ canvasDrawerRef, onOpen }: { canvasDrawerRef: any; onOpen: any }) => {
  const {
    selectedShapeDimensions: { width, height, aspectRatio },
  } = useAppSelector(selectShape);

  return (
    <Stack
      w="100%"
      className="flex items-center justify-between pb-20 border-b-[1px] border-b-lightGray px-5 mt-5"
    >
      <Box h="40px" w="100%">
        <HeadingTxt txt="CANVAS" color="white" others={{ marginBottom: 4 }} />
        <Button
          variant="ghost"
          width="100%"
          height="64px"
          bg="#282828"
          _hover={{ bg: "#282828" }}
          className="flex items-center !justify-between"
          _active={{
            bg: "#282828",
            transform: "scale(0.98)",
            borderColor: "#282828",
          }}
          ref={canvasDrawerRef}
          onClick={onOpen}
        >
          <span className="flex flex-col items-start">
            <span color="white">{aspectRatio}</span>
            <span className="text-grayText">
              {width} X {height}
            </span>
          </span>
          <RightArrowIcon />
        </Button>
      </Box>
    </Stack>
  );
};

export default CanvasDimensions;
