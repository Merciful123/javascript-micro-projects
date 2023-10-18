const initState = {
  departments: [
    {
      id: "dep01",
      title: "Outdoors"
    },
    {
      id: "dep02",
      title: "Books"
    },
    {
      id: "dep03",
      title: "Electronics"
    },
    {
      id: "dep04",
      title: "Baby"
    },
    {
      id: "dep05",
      title: "Sports"
    },
    {
      id: "dep06",
      title: "Health"
    }
  ],
  products: [
    {
      id: 1,
      product: "Fish - Halibut, Cold Smoked",
      cost: 29,
      code: "391-93-0137",
      department: "Outdoors"
    },
    {
      id: 2,
      product: "Chocolate - Sugar Free Semi Choc",
      cost: 37,
      code: "208-49-2011",
      department: "Books"
    },
    {
      id: 3,
      product: "Daikon Radish",
      cost: 24,
      code: "588-65-3690",
      department: "Electronics"
    },
    {
      id: 4,
      product: "Coffee - Flavoured",
      cost: 26,
      code: "413-07-7184",
      department: "Baby"
    },
    {
      id: 5,
      product: "Bag Clear 10 Lb",
      cost: 9,
      code: "537-54-3992",
      department: "Sports"
    },
    {
      id: 6,
      product: "Nantucket Pine Orangebanana",
      cost: 13,
      code: "639-40-5969",
      department: "Health"
    }
  ],
  filter: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }
    case "CLEAR_FILTER": {
      return {
        ...state,
        filter: null
      };
    }
    case "INITIALIZE_CATALOG": {
      return {
        ...state,
        departments: action.departments,
        products: action.products
      };
    }
    default: {
      return state;
    }
  }
};
