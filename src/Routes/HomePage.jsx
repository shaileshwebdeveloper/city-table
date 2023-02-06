import React, { useEffect, useState } from "react";
import { CityTable } from "../Components/CityTable";
import { getCities } from "../api/cities";
import { Pagination } from "../Components/Pagination";
import { useSearchParams } from "react-router-dom";

function getPage(value) {
  value = Number(value);
  if (!value || value < 1) {
    value = 1;
  }

  return value;
}

const getSort = (string) => {
  return ["ASC", "asc", "DESC", "desc"].includes(string) ? string : "asc";
};

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = getPage(searchParams.get("page"));
  const initSort = getSort(searchParams.get("sortOrder"));
  const [page, setPage] = useState(initPage);
  const [sortByPopulation, setSortByPopulation] = useState(initSort);

  useEffect(() => {
    setLoading(true);
    getCities({
      sortByPopulation,
      page,
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

  useEffect(() => {
    setSearchParams({
      page,
      sortByPopulation,
    });
  }, [page, sortByPopulation, setSearchParams]);

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
      {loading ? <h4>Loading</h4> : <CityTable data={data} />}
    </div>
  );
};
