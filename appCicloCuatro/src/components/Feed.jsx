import React from "react";
import { Box, Stack, Image, Flex, Heading, Text} from "@chakra-ui/react";
import { Button } from "react-bootstrap";
import { FaDollarSign, FaList, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import GroupTitle from "./GroupTitle";
import Filters from "./Filters";

const Feed = () => {
  return (
    <Box maxWidth="1200px" mx="auto" pt="15px">
        
      <Flex justifyContent="space-between" alignItems="center" mb = "30px">
        <Flex alignItems="center">
          <Image src="src\assets\image\petLogo.svg" />
          <Stack ml="10px" spacing="0px">
            <Heading fontSize="24px">Tienda de Mascotas</Heading>
            <Text color="grey">Cuidamos a tus peludos</Text>
          </Stack>
        </Flex>
        <Stack isInline alignItems="center">
          <Button variant="success">
            <FaList /> Lista de Productos
          </Button>
          <Button variant="warning">
            <FaEdit /> Modificar Productos
          </Button>
          <Button variant="primary">
            <FaDollarSign /> Lista de Ventas
          </Button>
        </Stack>
      </Flex>
      <Text  fontSize='50px'color= "grey">Vista Administrador</Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Stack justifyContent="space-between">
          <GroupTitle />
        </Stack>
        <Stack justifyContent="space-between">
          <Filters />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Feed;
