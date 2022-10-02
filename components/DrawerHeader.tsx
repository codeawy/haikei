import { DrawerHeader, Stack } from "@chakra-ui/react";
import LeftArrowIcon from "./svg/LeftArrowIcon";

interface IProps {
  title: string;
  onClose: () => void;
}

const DrawerHeading: React.FC<IProps> = ({ title, onClose }) => {
  return (
    <Stack
      direction="row"
      pl={5}
      className="flex items-center justify-between"
      onClick={onClose}
      cursor="pointer"
    >
      <LeftArrowIcon />
      <DrawerHeader fontSize={15}>{title}</DrawerHeader>
    </Stack>
  );
};

export default DrawerHeading;
