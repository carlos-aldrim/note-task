import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PagesRoutes, Home, Add, Edit, Note } from "../../views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.home}
          element={<Home/>}
        />
        <Route
          path={PagesRoutes.add}
          element={<Add/>}
        />
        <Route
          path={PagesRoutes.edit}
          element={<Edit/>}
        />
        <Route
          path={PagesRoutes.note}
          element={<Note/>}
        />
      </Routes>
    </BrowserRouter>
  );
};