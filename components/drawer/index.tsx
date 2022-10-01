import { useDisclosure } from "@chakra-ui/react";
import BlobDrawer from "./BlobDrawer";

const DrawersWrapper = () => {
  const {
    isOpen: isOpenBlobDrawer,
    onOpen: onOpenBlobDrawer,
    onClose: onCloseBlobDrawer,
  } = useDisclosure();

  return <>{/* <BlobDrawer isOpen={isOpenBlobDrawer} onClose={onCloseBlobDrawer} /> */}</>;
};

export default DrawersWrapper;
