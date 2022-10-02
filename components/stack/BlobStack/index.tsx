import { Box, Button, Stack, VStack } from "@chakra-ui/react";
import HeadingTxt from "components/Heading";
import BlobCanvas from "./BlobCanvas";
import BlobColors from "./BlobColors";
import BlobShapes from "./BlobShapes";
import BlobVariants from "./BlobVariants";

const BlobStack = () => {
  return (
    <div className="h-screen flex flex-col justify-between relative">
      <VStack spacing="30px" className="max-h-[95%] py-5 pl-5" align="stretch">
        <div className="max-h-[90%] overflow-y-scroll pr-5">
          <BlobCanvas />
          <BlobVariants />
          <BlobColors />
          <BlobShapes />
        </div>
      </VStack>

      <div className="bg-textGray py-5 absolute bottom-0 right-0 w-full px-5">
        <HeadingTxt txt="DOWNLOAD" color="white" others={{ marginBottom: 4 }} />
        <Stack direction="row">
          <Button bg="purple.500" _hover={{ bg: "purple.500" }} w="full">
            SVG
          </Button>
          <Button bg="teal.400" _hover={{ bg: "teal.400" }} w="full">
            PNG
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default BlobStack;
