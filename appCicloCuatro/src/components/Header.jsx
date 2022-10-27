import React from "react";
import {
  Stack,
  Image,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FaDollarSign, FaList, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from '../assets/css/styles.css'

const Header = () => {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb="30px">
        <Flex alignItems="center">
          <Image src="src\assets\image\petLogo.svg" />
          <Stack ml="10px" spacing="0px">
            <Heading fontSize="24px">Tienda de Mascotas</Heading>
            <Text color="grey">Cuidamos a tus peludos</Text>
          </Stack>
        </Flex>
        <Stack isInline alignItems="center">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            color="grey"
            fontWeight={600}
            bg="#7AD892"
          >
            <FaList />
            <Link  className = "link-nav"  to="listaproductos">
              Lista de Productos
            </Link>
          </Button>

          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            color="grey"
            fontWeight={600}
            bg="#D7EF88"
          >
            <FaEdit />
            <Link className = "link-nav" to="productos">
              Editar Productos
            </Link>
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            color="grey"
            fontWeight={600}
            bg="#F5A771"
          >
            <FaDollarSign />{" "}
            <Link className = "link-nav" to="/">
              Lista de Ventas
            </Link>
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

export default Header;
