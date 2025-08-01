//array method dasgal-2

let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
const getAvailableCars = (cars) => {
  const availableCars = cars.filter((car) => car.isAvailable === true);
  return availableCars;
};
console.log("Bodlogo1", getAvailableCars(cars));

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
const getRecentCars = (cars) => {
  const recentCars = cars.filter((car) => car.year > 2018);
  return recentCars;
};
console.log("Bodlogo2", getRecentCars(cars));

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
const getExpensiveCars = (cars) => {
  const expensiveCars = cars.filter((car) => car.price > 5000000);
  return expensiveCars;
};
console.log("Bodlogo3", getExpensiveCars(cars));

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
const getSedans = (cars) => {
  const typeSedan = cars.filter((car) => car.type === "Sedan");
  return typeSedan;
};
console.log("Bodlogo4", getSedans(cars));

// 5. Брэндээр шүүж буцаадаг функц бич.
const filterByBrand = (cars, brand) => {
  const byBrand = cars.filter((car) => car.brand == brand);
  return byBrand;
};
console.log("Bodlogo5", filterByBrand(cars, "Hyundai"));

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
const getHighMileageCars = (cars) => {
  const HighMileageCars = cars.filter((car) => car.mileage > 100000);
  return HighMileageCars;
};
console.log("Bodlogo6", getHighMileageCars(cars));

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
const addEfficiencyFlag = (cars) => {
  const efficiencyFlag = cars.map((car) => {
    return {
      ...car,
      efficient: car.fuelEfficiency < 5.0,
    };
  });
  return efficiencyFlag;
};
console.log("Bodlogo7", addEfficiencyFlag(cars));

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
const increaseCarPrices = (cars) => {
  const carPrices = cars.map((car) => {
    return {
      ...car,
      price: car.price * 1.15,
    };
  });
  return carPrices;
};
console.log("Bodlogo8", increaseCarPrices(cars));

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
const getLowMileageCars = (cars) => {
  const lowMileageCars = cars.filter((car) => car.mileage < 50000);
  return lowMileageCars;
};
console.log("Bodlogo9", getLowMileageCars(cars));

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
const getMostEfficientCar = (cars) => {
  let min = cars[0];
  cars.filter((car) => {
    if (car.fuelEfficiency < min.fuelEfficiency) {
      min = car;
    }
  });
  return min;
};
console.log("Bodlogo10", getMostEfficientCar(cars));

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
const getMostExpensiveCar = (cars) => {
  let une = cars[0];
  cars.filter((car) => {
    if (car.price > une.price) {
      une = car;
    }
  });
  return une;
};
console.log("Bodlogo11", getMostExpensiveCar(cars));

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
const getTotalMileage = (cars) => {
  let total = 0;
  cars.forEach((car) => {
    total += car.mileage;
  });
  return total;
};
console.log("Bodlogo12", getTotalMileage(cars));

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
const filterBySupplier = (cars, supplierName) => {
  const bySupplier = cars.filter((car) => car.supplier === supplierName);
  return bySupplier;
};
console.log("Bodlogo13", filterBySupplier(cars, "AutoJapan"));

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
const getCarModels = (cars) => {
  const carModels = cars.map((car) => {
    return car.model;
  });
  return carModels;
};
console.log("bodlogo14", getCarModels(cars));

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
const sortByPriceAscending = (cars) => {
  const priceAsceding = cars.sort((a, b) => b.price - a.price);
  return priceAsceding;
};
console.log("Bodlogo15", sortByPriceAscending(cars));

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
const getLargeEngineCars = (cars) => {
  const largeEngineCars = cars.filter((car) => car.engineSize > 2.0);
  return largeEngineCars;
};
console.log("Bodlogo16", getLargeEngineCars(cars));

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let arrBrands = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrands = [];
  arrBrands.forEach((brand) => {
    if (uniqueBrands.includes(brand)) {
    } else {
      uniqueBrands.push(brand);
    }
  });
  return uniqueBrands;
}
const resultuniqueBrands = getUniqueBrands(cars);
console.log("Bodlogo17", resultuniqueBrands);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
const getModelAndYearList = (cars) => {
  const modeAndYear = cars.map((car) => {
    return {
      model: car.model,
      year: car.year,
    };
  });
  return modeAndYear;
};
console.log("Bodlogo18", getModelAndYearList(cars));

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
const tagSuperEfficientCars = (cars) => {
  const superEfficientCars = cars.map((car) => {
    return {
      ...car,
      superEfficient: car.fuelEfficiency < 4,
    };
  });
  return superEfficientCars;
};
console.log("Bodlogo19", tagSuperEfficientCars(cars));

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
const addIdToCars = (cars) => {
  let idToCars = cars.map((car, index) => {
    return {
      ...car,
      id: index + 1,
    };
  });
  return idToCars;
};
console.log("Bodlogo20", addIdToCars(cars));
