import { Stack } from "@chakra-ui/react";
import BlobVariantsRadioCard from "./utils/BlobVariantsRadioCard";
import BlobVariantsPositions from "./utils/BlobVariantsPositions";
import HeadingTxt from "components/Heading";

const BlobVariants = () => {
  return (
    <Stack
      w="100%"
      className="flex items-center justify-between pb-5 mb-5 border-b-[1px] border-b-lightGray pl-5"
      align="stretch"
    >
      <HeadingTxt txt="VARIANTS" color="white" others={{ marginBottom: 2 }} />
      <HeadingTxt txt="Styles" />
      <BlobVariantsRadioCard />

      <HeadingTxt txt="Positions" />
      <BlobVariantsPositions />
    </Stack>
  );
};

export default BlobVariants;
