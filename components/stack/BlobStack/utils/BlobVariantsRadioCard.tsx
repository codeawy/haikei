import { Box, HStack, useRadioGroup, useRadio, Text } from "@chakra-ui/react";
import SolidCircleIcon from "components/svg/SolidCircleIcon";
import OutlineCircleIcon from "components/svg/OutlineCircleIcon";
import { useAppDispatch } from "app/hooks";
import { selectBlobVariant } from "app/features/blobSlice";

function RadioCard(props: any) {
  const { idx, value } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const dispatch = useAppDispatch();

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const icons = [{ icon: <SolidCircleIcon /> }, { icon: <OutlineCircleIcon /> }];

  const selectVariantHandler = () => {
    dispatch(selectBlobVariant(idx ? false : true));
  };

  return (
    <Box as="label" width="100%" onClick={selectVariantHandler}>
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
        <span color="white">{value === "outline" ? "Outline" : "Solid"}</span>
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
            <Box
              key={value}
              className="border-2 border-transparent w-full"
              onClick={() => {
                console.log(value);
              }}
            >
              <RadioCard {...radio} idx={idx} value={value} />
            </Box>
          );
        })}
      </div>
    </HStack>
  );
}

export default BlobVariantsRadioCard;
