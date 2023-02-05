import React, { useEffect, useState } from "react";
import { CityTable } from "../Components/CityTable";
import { getCities } from "../api/cities";
import { Pagination } from "../Components/Pagination";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const [page, setPage] = useState(1)

  const [sortByPopulation, setSortByPopulation] = useState("asc");

  useEffect(() => {
    setLoading(true);
    getCities({
      sortByPopulation,
      page
    })
      .then((r) => {
        setLoading(false);
        setData(r);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [sortByPopulation, page]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <button
        onClick={() =>
          setSortByPopulation(sortByPopulation === "asc" ? "desc" : "asc")
        }
      >
        {" "}
        SHOW IN {sortByPopulation === "asc" ? "desc" : "asc"}
      </button>
      <Pagination current={page} onChange={(page) => setPage(page)} />
      {loading ? <h4>Loading</h4> : <CityTable data={data}/>}
    </div>
  );
};
