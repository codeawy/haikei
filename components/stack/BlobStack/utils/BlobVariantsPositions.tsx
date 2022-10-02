import { Box, HStack, useRadioGroup, useRadio, Tooltip } from "@chakra-ui/react";
import CenterIcon from "components/svg/CenterIcon";
import LeftBottomIcon from "components/svg/LeftBottomIcon";
import RightBottomIcon from "components/svg/RightBottomIcon";
import TopLeftIcon from "components/svg/TopLeftIcon";
import TopRightIcon from "components/svg/TopRightcon";

function RadioCard(props: any) {
  const { value, idx } = props;

  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const icons = [
    { icon: <TopLeftIcon /> },
    { icon: <LeftBottomIcon /> },
    { icon: <CenterIcon /> },
    { icon: <RightBottomIcon /> },
    { icon: <TopRightIcon /> },
  ];

  return (
    <Tooltip label={value} bg="#303030" rounded="md">
      <Box as="label" width="100%">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          // boxShadow="md"
          _checked={{
            bg: "#303030",
            color: "white",
            transition: "all .3s ease-in-out",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={2}
          py={2}
          className="flex flex-col items-center justify-center !border-none"
        >
          {icons[idx].icon}
        </Box>
      </Box>
    </Tooltip>
  );
}

function BlobVariantsPositions() {
  const options = ["Top Left", "Left Bottom", "Center", "Right Bottom", "Top Right"];

  const handleChange = (value: any) => {
    // Do something...
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "positions",
    defaultValue: "Center",
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} mb={5}>
      <div className="bg-lightGray w-full flex items-center justify-between p-1 rounded-md">
        {options.map((value, idx) => {
          return (
            <Box key={value} className="border-2 border-transparent w-full">
              <RadioCard {...getRadioProps({ value })} value={value} idx={idx} />
            </Box>
          );
        })}
      </div>
    </HStack>
  );
}

export default BlobVariantsPositions;
