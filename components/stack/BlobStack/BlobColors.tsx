import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import ColorBox from "components/ColorBox";
import HeadingTxt from "components/Heading";
import EyeIcon from "components/svg/EyeIcon";
import React from "react";

const BlobColors = () => {
  return (
    <Stack
      w="100%"
      align="stretch"
      className="flex items-center justify-between pb-5 mb-5 border-b-[1px] border-b-lightGray"
    >
      <HeadingTxt txt="COLOR" color="white" others={{ marginBottom: 4 }} />
      <Stack direction="column" spacing="15px">
        <HeadingTxt txt="Background" />
        <Stack direction={"row"} spacing="10px">
          <ColorBox bg={"#24b9b9"} />
          <InputGroup bg="#303030" rounded="lg">
            <InputLeftElement bg="transparent" border="none">
              #
            </InputLeftElement>
            <Input
              type="string"
              placeholder="FFFFFF"
              border="none"
              maxLength={6}
              focusBorderColor="purple.200"
              boxShadow="lg"
            />
          </InputGroup>
          <Button
            bg={"#282828"}
            width={16}
            rounded="md"
            className="flex items-center justify-center cursor-pointer"
            _hover={{ bg: "#282828" }}
          >
            <EyeIcon />
          </Button>
        </Stack>
        <HeadingTxt txt="Fill" />

        <Stack direction={"row"} spacing="10px">
          <ColorBox bg={"#24b9b9"} />
          <InputGroup bg="#303030" rounded="lg">
            <InputLeftElement bg="transparent" border="none">
              #
            </InputLeftElement>
            <Input
              type="string"
              placeholder="FFFFFF"
              border="none"
              maxLength={6}
              focusBorderColor="purple.200"
              boxShadow="lg"
            />
          </InputGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlobColors;
