import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PagesRoutes, Home, Notepad } from "../../views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.home}
          element={<Home/>}
        />
        <Route
          path={PagesRoutes.notepad}
          element={<Notepad/>}
        />
      </Routes>
    </BrowserRouter>
  );
};