import { Box, HStack, useRadioGroup, useRadio, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" width="100%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="#242424"
        _checked={{
          bg: "#303030",
          color: "white",
          borderColor: "#303030",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={2}
        className="flex flex-col items-center justify-center"
      >
        <Icon viewBox="0 0 200 200" color="white" fontSize={25}>
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Text fontSize={15} mt={1} color="white">
          {props.idx === 0 ? "Outline" : "Solid"}
        </Text>
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function BlobVariantsRadioCard() {
  const options = ["react", "vue"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value, idx) => {
        const radio = getRadioProps({ value });
        return (
          <Box key={value} className="border-2 border-transparent w-full">
            <RadioCard {...radio} idx={idx} />
          </Box>
        );
      })}
    </HStack>
  );
}

export default BlobVariantsRadioCard;
