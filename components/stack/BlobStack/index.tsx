import { VStack, StackDivider } from "@chakra-ui/react";
import BlobCanvas from "./utils/BlobCanvas";
import BlobVariants from "./utils/BlobVariants";

const BlobStack = () => {
  return (
    <VStack
      spacing="30px"
      className="h-screen p-5"
      divider={<StackDivider borderColor="#282828" />}
      align="stretch"
    >
      <BlobCanvas />
      <BlobVariants />
    </VStack>
  );
};

export default BlobStack;
