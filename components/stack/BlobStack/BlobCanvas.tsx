import { Stack, Box, Button, Text } from "@chakra-ui/react";
import HeadingTxt from "components/Heading";
import RightArrowIcon from "components/svg/RightArrowIcon";

const BlobCanvas = ({ canvasDrawerRef, onOpen }: { canvasDrawerRef: any; onOpen: any }) => {
  return (
    <Stack
      w="100%"
      className="flex items-center justify-between pb-20 mb-5 border-b-[1px] border-b-lightGray pl-5"
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
            <span color="white">3:2</span>
            <span className="text-grayText">900 X 600</span>
          </span>
          <RightArrowIcon />
        </Button>
      </Box>
    </Stack>
  );
};

export default BlobCanvas;
