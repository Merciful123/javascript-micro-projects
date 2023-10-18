const departments = [
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
  },
  {
    id: "dep07",
    title: "Kids"
  },
  {
    id: "dep08",
    title: "Computers"
  },
  {
    id: "dep09",
    title: "Industrial"
  },
  {
    id: "dep10",
    title: "Movies"
  },
  {
    id: "dep11",
    title: "Games"
  },
  {
    id: "dep12",
    title: "Shoes"
  },
  {
    id: "dep13",
    title: "Clothing"
  },
  {
    id: "dep14",
    title: "Beauty"
  },
  {
    id: "dep15",
    title: "Tools"
  },
  {
    id: "dep16",
    title: "Home"
  }
];

const products = [
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
  },
  {
    id: 7,
    product: "Yogurt - Cherry, 175 Gr",
    cost: 50,
    code: "193-17-9523",
    department: "Baby"
  },
  {
    id: 8,
    product: "Ice Cream - Strawberry",
    cost: 9,
    code: "789-12-2746",
    department: "Books"
  },
  {
    id: 9,
    product: "Soup - Knorr, Ministrone",
    cost: 14,
    code: "747-56-4437",
    department: "Kids"
  },
  {
    id: 10,
    product: "Garam Marsala",
    cost: 39,
    code: "619-18-8915",
    department: "Outdoors"
  },
  {
    id: 11,
    product: "Asparagus - Mexican",
    cost: 10,
    code: "114-17-9274",
    department: "Books"
  },
  {
    id: 12,
    product: "Iced Tea - Lemon, 460 Ml",
    cost: 32,
    code: "702-09-8760",
    department: "Outdoors"
  },
  {
    id: 13,
    product: "Eggwhite Frozen",
    cost: 16,
    code: "318-06-7775",
    department: "Computers"
  },
  {
    id: 14,
    product: "Sprouts - Onion",
    cost: 48,
    code: "249-25-7530",
    department: "Kids"
  },
  {
    id: 15,
    product: "Rum - Mount Gay Eclipes",
    cost: 27,
    code: "402-44-7987",
    department: "Industrial"
  },
  {
    id: 16,
    product: "Sauce - Caesar Dressing",
    cost: 39,
    code: "841-56-3792",
    department: "Electronics"
  },
  {
    id: 17,
    product: "Dried Peach",
    cost: 19,
    code: "424-74-1253",
    department: "Movies"
  },
  {
    id: 18,
    product: "Shrimp - Black Tiger 8 - 12",
    cost: 34,
    code: "569-76-3152",
    department: "Games"
  },
  {
    id: 19,
    product: "Rhubarb",
    cost: 47,
    code: "721-87-8974",
    department: "Outdoors"
  },
  {
    id: 20,
    product: "Mushroom - Enoki, Fresh",
    cost: 43,
    code: "213-32-5009",
    department: "Kids"
  },
  {
    id: 21,
    product: "Mushrooms - Black, Dried",
    cost: 12,
    code: "531-50-3887",
    department: "Sports"
  },
  {
    id: 22,
    product: "Poppy Seed",
    cost: 48,
    code: "253-73-9483",
    department: "Shoes"
  },
  {
    id: 23,
    product: "Marjoram - Dried, Rubbed",
    cost: 7,
    code: "422-71-2586",
    department: "Sports"
  },
  {
    id: 24,
    product: "Bread - Olive Dinner Roll",
    cost: 9,
    code: "234-03-9575",
    department: "Games"
  },
  {
    id: 25,
    product: "Wine - George Duboeuf Rose",
    cost: 8,
    code: "748-15-6893",
    department: "Clothing"
  },
  {
    id: 26,
    product: "Latex Rubber Gloves Size 9",
    cost: 15,
    code: "333-30-2508",
    department: "Beauty"
  },
  {
    id: 27,
    product: "Wine - Duboeuf Beaujolais",
    cost: 40,
    code: "302-12-8794",
    department: "Books"
  },
  {
    id: 28,
    product: "Lobster - Base",
    cost: 17,
    code: "874-23-3773",
    department: "Movies"
  },
  {
    id: 29,
    product: "Wine - Red, Metus Rose",
    cost: 40,
    code: "672-85-3259",
    department: "Shoes"
  },
  {
    id: 30,
    product: "Banana Turning",
    cost: 33,
    code: "214-49-2854",
    department: "Sports"
  },
  {
    id: 31,
    product: "Five Alive Citrus",
    cost: 19,
    code: "807-87-5042",
    department: "Clothing"
  },
  {
    id: 32,
    product: "Remy Red",
    cost: 7,
    code: "111-03-5089",
    department: "Electronics"
  },
  {
    id: 33,
    product: "Pastry - Chocolate Marble Tea",
    cost: 46,
    code: "282-87-3640",
    department: "Books"
  },
  {
    id: 34,
    product: "Pears - Anjou",
    cost: 28,
    code: "127-32-7664",
    department: "Sports"
  },
  {
    id: 35,
    product: "Flavouring - Raspberry",
    cost: 21,
    code: "851-12-8090",
    department: "Electronics"
  },
  {
    id: 36,
    product: "Rice - Jasmine Sented",
    cost: 23,
    code: "750-82-3504",
    department: "Movies"
  },
  {
    id: 37,
    product: "Gherkin",
    cost: 23,
    code: "366-78-9199",
    department: "Tools"
  },
  {
    id: 38,
    product: "Muffin - Bran Ind Wrpd",
    cost: 30,
    code: "426-18-8908",
    department: "Shoes"
  },
  {
    id: 39,
    product: "Wine - Sawmill Creek Autumn",
    cost: 49,
    code: "413-91-4321",
    department: "Home"
  },
  {
    id: 40,
    product: "Tea - Decaf Lipton",
    cost: 43,
    code: "506-81-9445",
    department: "Home"
  }
];

export const getDepartments = () => Promise.resolve(departments);
export const getProducts = () => Promise.resolve(products);
