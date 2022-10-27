import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Layout
import Feed from "./Layout/Feed";

//Import Pages
import ListaVentas from "./pages/ListaVentas";
import EditarProductos from "./pages/EditarProductos";
import ListaProductos  from "./pages/ListaProductos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Feed/>}>
          <Route index element = {<ListaVentas/>}></Route>
          <Route path="productos" element={<EditarProductos/>}></Route>
          <Route path="listaproductos" element={<ListaProductos/>}></Route>
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
