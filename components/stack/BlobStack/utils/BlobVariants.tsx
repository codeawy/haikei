import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import BlobVariantsRadioCard from "./BlobVariantsRadioCard";
import BlobVariantsPositions from "./BlobVariantsPositions";
import HeadingTxt from "components/Heading";
import UpArrowIcon from "components/svg/UpArrowIcon";
import DownArrowIcon from "components/svg/DownArrowIcon";
import BlobVariantsComplexity from "./BlobVariantsComplexity";

const BlobVariants = () => {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem borderColor="#4747475f" pt={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton className="flex items-center justify-between !px-0">
                <Heading as="h6" size="xs" color="white">
                  VARIANTS
                </Heading>
                {isExpanded ? <UpArrowIcon /> : <DownArrowIcon />}
              </AccordionButton>
            </h2>
            <AccordionPanel px={0}>
              <HeadingTxt txt="Styles" />
              <BlobVariantsRadioCard />

              <HeadingTxt txt="Positions" />
              <BlobVariantsPositions />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem borderColor="#4747475f" py={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton className="flex items-center justify-between !px-0">
                <Heading as="h6" size="xs" color="white">
                  SHAPE
                </Heading>
                {isExpanded ? <UpArrowIcon /> : <DownArrowIcon />}
              </AccordionButton>
            </h2>
            <AccordionPanel px={0}>
              <HeadingTxt txt="Complexity" />
              <BlobVariantsComplexity />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default BlobVariants;
