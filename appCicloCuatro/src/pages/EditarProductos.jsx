import React from "react";
import { Box, Stack, Flex,Text } from "@chakra-ui/react";

//Componentes
import GroupTitle from "../components/GroupTitle";
import Filters from "../components/Filters";
import Repo from "../components/Repo";

const EditarProductos = () => {
  return (
    <Box>
      <Text fontSize="50px" color="grey">
        Editar Productos
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Stack justifyContent="space-between">
          <GroupTitle />
        </Stack>
        <Stack justifyContent="space-between">
          <Filters />
        </Stack>
      </Flex>
      <Repo />
    </Box>
  );
};

export default EditarProductos;
