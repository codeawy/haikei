import { Heading } from "@chakra-ui/react";

const HeadingTxt = ({ txt }: { txt: string }) => {
  return (
    <Heading as="h6" size="xs" color="grayText" mb={2}>
      {txt}
    </Heading>
  );
};

export default HeadingTxt;
