import { useTheme } from "next-themes";
import { VStack, Box, Switch, Tag } from "@chakra-ui/react";

const AppSideStack = () => {
  const { theme, setTheme } = useTheme();
  return (
    <VStack spacing="24px" className="h-screen max-w-[250px] border-[1px] border-textGray p-5">
      <Box w="100%" className="flex items-center justify-between">
        <span>Dark Mode</span>
        <Switch size="md" onChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
      </Box>
      <Box w="100%" h="150px" bg="yellow.200" className="rounded-lg">
        1
      </Box>
      <Box w="100%" h="150px" bg="tomato" className="rounded-lg">
        2
      </Box>
      <Box w="100%" h="150px" bg="pink.100" className="rounded-lg">
        3
      </Box>
    </VStack>
  );
};

export default AppSideStack;
