export const setFilter = department => {
  return {
    type: "SET_FILTER",
    filter: department
  };
};

export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER"
  };
};
