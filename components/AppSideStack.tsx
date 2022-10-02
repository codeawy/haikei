import { VStack } from "@chakra-ui/react";
import { stackBoxes } from "../utils/lists";

const AppSideStack = () => {
  return (
    <VStack
      spacing="24px"
      className="h-screen  max-w-[250px] border-r-[1px] border-r-textGray p-5 bg-darkGray"
    >
      <div className="stack-boxes-wrapper w-full overflow-y-scroll pr-4">
        {stackBoxes.map((box: object, idx: number) => (
          <div
            key={idx}
            className="w-full rounded-lg overflow-hidden hover:scale-95 duration-300 cursor-pointer relative mb-5"
          >
            <img src={box.img} width={"100%"} height={"100px"} />
            <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-lg">
              {box.title}
            </span>
          </div>
        ))}
      </div>
    </VStack>
  );
};

export default AppSideStack;
