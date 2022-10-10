import { VStack } from "@chakra-ui/react";
import BlobColors from "./BlobColors";
import BlobShapes from "./BlobShapes";
import BlobVariants from "./BlobVariants";

const BlobStack = () => {
  return (
    <>
      <VStack className="py-5" align="stretch">
        <div className="pr-5">
          <BlobVariants />
          <BlobColors />
          <BlobShapes />
        </div>
      </VStack>
    </>
  );
};

export default BlobStack;
