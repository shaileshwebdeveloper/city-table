import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCityById } from "../api/cities";

export const CityPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getCityById(id)
      .then((r) => {
        setLoading(false);
        setData(r);
      })
      .catch((e) => console.log(e));
  }, [id]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <table>
        <tr>
          <th>Field Name</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>{data.city}</td>
        </tr>

        <tr>
          <td>Country</td>
          <td>{data.country}</td>
        </tr>

        <tr>
          <td>Population</td>
          <td>{data.population}</td>
        </tr>
      </table>
    </div>
  );
};
