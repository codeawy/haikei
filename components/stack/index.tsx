import { Button, Stack } from "@chakra-ui/react";
import { toggleOpenDrawerAction } from "app/drawer/drawerSlice";
import { useAppDispatch } from "app/hooks";
import HeadingTxt from "components/Heading";
import BlobStack from "./BlobStack";
import CanvasDimensions from "./CanvasDimensions";

const StacksWrapper = ({ canvasDrawerRef }: { canvasDrawerRef: any }) => {
  const dispatch = useAppDispatch();

  const onOpenDrawer = () => {
    dispatch(toggleOpenDrawerAction());
  };

  return (
    <div className="bg-darkGray h-screen flex flex-col justify-between relative">
      <Stack className="max-h-[85%] overflow-y-scroll ">
        <CanvasDimensions canvasDrawerRef={canvasDrawerRef} onOpen={onOpenDrawer} />
        <BlobStack />
      </Stack>
      <div className="bg-textGray py-5 absolute bottom-0 right-0 w-full  px-5">
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

export default StacksWrapper;
