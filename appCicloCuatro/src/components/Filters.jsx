import React from "react";
import {
  Stack,
  Select,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { Button, Dropdown } from "react-bootstrap";
import { FaTable, FaList } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import languages from "../data/languages.json";
import optionFilters from "../data/optionFilters.json";

const Filters = () => {
  
  return (
    <Stack
      isInline
      spacing={5}
      borderWidth={1}
      bg="secondary"
      rounded="5px"
      aligItems="center"
      ml="10px"
      fontSize = "24px"
    >
      <Dropdown >
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          All languages
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {languages.map((language) => (
            <Dropdown.Item>{language.value}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Weekly
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {optionFilters.map((filter) => (
            <Dropdown.Item>{filter.value}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="secondary">
        <FaList /> List View
      </Button>
      <Button variant="secondary">
        <FaTable /> Grid View
      </Button>
    </Stack>
  );
};

export default Filters;
