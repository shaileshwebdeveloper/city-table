import React from "react";
import { CityRow } from "./CityRow";

export const CityTable = ({ data }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>City</th>
        <th>Population</th>
        <th>Country</th>
      </thead>
      {data?.map((item) => {
        return (
          <CityRow
            id={item.id}
            population={item.population}
            country={item.country}
            city={item.city}
          />
        );
      })}
    </table>
  );
};
