import { VStack, StackDivider } from "@chakra-ui/react";
import BlobCanvas from "./BlobCanvas";
import BlobColors from "./BlobColors";
import BlobShapes from "./BlobShapes";
import BlobVariants from "./BlobVariants";

const BlobStack = () => {
  return (
    <VStack
      spacing="30px"
      className="h-screen py-5 pl-5"
      divider={<StackDivider borderColor="#282828" />}
      align="stretch"
    >
      <div className="max-h-[90%] overflow-y-scroll pr-5">
        <BlobCanvas />
        <BlobVariants />
        <BlobColors />
        <BlobShapes />
      </div>
    </VStack>
  );
};

export default BlobStack;
