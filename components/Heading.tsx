import { Heading } from "@chakra-ui/react";

interface IProps {
  txt: string;
  color?: string;
  size?: string;
  others?: any;
}

const HeadingTxt: React.FC<IProps> = ({ txt, color = "grayText", size = "xs", others }) => {
  return (
    <Heading as="h6" size={size} color={color} mb={2} {...others}>
      {txt}
    </Heading>
  );
};

export default HeadingTxt;
