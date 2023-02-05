import React, { useEffect, useState } from "react";
import { CityCard } from "../Components/CityCard";

export const getCities = () => {
 return fetch("http://localhost:3004/data").then((r) => r.json());
};

export const HomePage = () => {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCities()
      .then((r) => {
        setLoading(false)
        setData(r)
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
  }

     console.log("data", data);


  return <div>
        <table>
        <thead>
            <th>ID</th>
            <th>City</th>
            <th>Population</th>
            <th>Country</th>
        </thead>
         {data?.map((item) => {
           return  <CityCard id={item.id} population={item.population} 
           country={item.country} city={item.city}/>
        })}
        </table>
  </div>;
};
