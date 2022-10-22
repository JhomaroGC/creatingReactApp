import React from "react";
import { Box } from "@chakra-ui/react";

//Components
import Feed from "./components/Feed";
import Options from "./components/Options";

function App() {
  return (
    <Box width="100vm" minHeight={"100vh"} bg="gray.400">
      <Feed />
      <Options />
    </Box>
  );
}

export default App;
