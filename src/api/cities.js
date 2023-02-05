export const getCities = ({ sortByPopulation, page=1, limit=5 }) => {
  return fetch(
    `http://localhost:3004/data?_sort=population&_order=${sortByPopulation}&_page=${page}&_limit=${limit}`
  ).then((r) => r.json());
};

export const getCityById = (id) => {
  return fetch(`http://localhost:3004/data/${id}`).then((r) => r.json());
};
