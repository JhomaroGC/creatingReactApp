import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

//Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Feed = () => {
  return (
    <Box maxWidth="1200px" mx="auto" pt="15px">
      <Header />
      <Outlet/>
      <Footer/>        
    </Box>
  );
};

export default Feed;
