import React from "react";
import { Box, Flex, Heading, Image, Link, Text, Stack } from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { getCurrentDate } from "../utils/functions";

const Repo = () => {
  return (
    <Box borderWidth={1} bg="#dcdce6" p="15px" rounded="5px">
      <Flex mb="15px">
        <Image src="https://picsum.photos/55/45" rounded={5} />
        <Box ml="10px">
          <Heading fontSize={20}>JhomaGC </Heading>
          <Text fontSize={18}>View Profile</Text>
        </Box>
      </Flex>
      <Box>
        <Heading
          as="a"
          href="https://github.com/JhomaroGC "
          _hover={{ textDecor: "none" }}
          target="_blank"
          color="purple.700"
          fontSize="20px"
        >
          Git Profile
        </Heading>
        <Text color="gray.600">
          Built by &middot;{" "}
          <Link
            href="https://github.com/JhomaroGC?tab=repositories"
            target="_blank"
            fontWeight={600}
          >
            Repo JhomaGC
          </Link>{" "}
          &middot; {getCurrentDate()}
        </Text>
        <Stack isInline>
          <SearchIcon /><Text>Read More</Text>
          <MoonIcon/><Text>Sleeped</Text>
          <SunIcon/><Text>Sunshine</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Repo;
