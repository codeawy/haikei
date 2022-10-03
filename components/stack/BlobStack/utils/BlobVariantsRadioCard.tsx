import { Box, HStack, useRadioGroup, useRadio, Text } from "@chakra-ui/react";
import SolidCircleIcon from "components/svg/SolidCircleIcon";
import OutlineCircleIcon from "components/svg/OutlineCircleIcon";

function RadioCard(props: any) {
  const { idx } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const icons = [{ icon: <SolidCircleIcon /> }, { icon: <OutlineCircleIcon /> }];

  return (
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
        px={5}
        py={2}
        className="flex flex-col items-center justify-center !border-none"
      >
        {icons[idx].icon}
        <span color="white">{props.idx === 0 ? "Outline" : "Solid"}</span>
      </Box>
    </Box>
  );
}

function BlobVariantsRadioCard() {
  const options = ["solid", "outline"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "style",
    defaultValue: "solid",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} mb={5}>
      <div className="bg-lightGray w-full flex items-center p-1 rounded-md">
        {options.map((value, idx) => {
          const radio = getRadioProps({ value });
          return (
            <Box key={value} className="border-2 border-transparent w-full">
              <RadioCard {...radio} idx={idx} />
            </Box>
          );
        })}
      </div>
    </HStack>
  );
}

export default BlobVariantsRadioCard;
