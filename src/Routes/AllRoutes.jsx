import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CityRow } from "../Components/CityRow";
import { CityPage } from "./CityPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/city/:id" element={<CityPage />} />
      <Route path="*" element={<h1>GO BACK HOME</h1>} />
    </Routes>
  );
};
