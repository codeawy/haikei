import { Stack, Box, Heading, Button, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BlobCanvas = () => {
  return (
    <Stack w="100%" className="flex items-center justify-between mb-7">
      <Box h="40px" w="100%">
        <Heading as="h6" size="xs">
          CANVAS
        </Heading>
        <Button
          variant="ghost"
          mt={5}
          width="100%"
          height="64px"
          bg="#282828"
          _hover={{ bg: "#282828" }}
          className="flex items-center !justify-between"
          _active={{
            bg: "#282828",
            transform: "scale(0.98)",
            borderColor: "#282828",
          }}
        >
          <Text className="flex flex-col items-start">
            <Text fontSize="md" color="white" mb={1}>
              3:2
            </Text>
            <Text fontSize="xs" className="text-grayText">
              900 X 600
            </Text>
          </Text>
          <ChevronRightIcon color={"#6b6b6b"} />
        </Button>
      </Box>
    </Stack>
  );
};

export default BlobCanvas;
