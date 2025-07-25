let animals = [
  {
    leg: 4,
    name: "Dog",
    height: 10,
  },
  {
    leg: 2,
    name: "chicken",
    height: 5,
  },
  {
    leg: 4,
    name: "cat",
    height: 15,
  },
  {
    leg: 2,
    name: "kangroo",
    height: 45,
  },
];

const find4LegendAnimals = (aasd) => {
  let filterAnimals = [];
  let count = 0;
  for (i = 0; i < aasd, length; i++) {
    if (aasd[i].leg === 4) {
      filteredAnimals[count] = {
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filtereAnimals;
};

const filteredAnimals = findLeggedAnimals(animals);
console.log(filteredAnimals);
