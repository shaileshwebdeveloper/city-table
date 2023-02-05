import React, { useEffect, useState } from "react";
import { CityTable } from "../Components/CityTable";

export const getCities = ({
  sortByPopulation
}) => {
 return fetch(`http://localhost:3004/data?_sort=population&_order=${sortByPopulation}`).then((r) => r.json());
};

export const HomePage = () => {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const [sortByPopulation, setSortByPopulation] = useState("asc")

  useEffect(() => {
    setLoading(true);
    getCities({
      sortByPopulation
    })
      .then((r) => {
        setLoading(false)
        setData(r)
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [sortByPopulation]);

  if (loading) {
    return <h4>Loading...</h4>;
  }



  return <div>
       
      <button onClick={() => setSortByPopulation(sortByPopulation  === "asc" ? "desc" : "asc")}>
        {" "}
        SHOW IN {sortByPopulation === "asc" ? "desc" : "asc"}</button>
     <CityTable data={data} />


  </div>;
};
