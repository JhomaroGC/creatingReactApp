import React from "react";
import { Box, Stack, Flex, Text, SimpleGrid, Button, Link } from "@chakra-ui/react";

//Componentes
import GroupTitle from "../components/GroupTitle";
import Filters from "../components/Filters";
import Repo from "../components/Repo";

const ListaVentas = () => {
  return (
    <Box>
      <Text fontSize="50px" color="grey">
        Lista de Ventas
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Stack justifyContent="space-between">
          <GroupTitle />
        </Stack>
        <Stack justifyContent="space-between">
          <Filters />
        </Stack>
      </Flex>
      <SimpleGrid columns={3} spacing="15px">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </SimpleGrid>
      <Flex justifyContent="center" alignItems="center" mt="20px">
        <Button
          size="md"
          height="48px"
          width="200px"
          border="0px"
          rounded="5px"
          
          fontWeight={600}
          bg="#236dc9"
        >
          <Link className="link-nav" to="productos" color="#f4f4ea" >
            Next group items
          </Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default ListaVentas;
