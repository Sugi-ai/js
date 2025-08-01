// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 5000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
const getDiscountedProducts = (products) => {
  const discountedProducts = products.filter(
    (product) => product.isDiscounted === true
  );
  return discountedProducts;
};
console.log("Bodlogo1", getDiscountedProducts(data));

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
const getOutOfStockProducts = (products) => {
  const outOfStockProducts = products.filter((product) => product.stock === 0);
  return outOfStockProducts;
};
console.log("Bodlogo2", getOutOfStockProducts(data));

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
const getExpensiveProducts = (products) => {
  let expensiveProducts = products.filter((product) => product.price > 1000000);
  return expensiveProducts;
};
console.log("Bodlogo3", getExpensiveProducts(data));

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
const getComputers = (products) => {
  const computers = products.filter(
    (product) => product.category === "Computers"
  );
  return computers;
};
console.log("Bodlogo4", getComputers(data));

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
const filterByBrand = (products, brand) => {
  const byBrand = products.filter((product) => product.brand == brand);
  return byBrand;
};
console.log("Bodlogo5", filterByBrand(data, "Apple"));

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
const addIsHeavyFlag = (products) => {
  const isHeavyFlag = products.map((product) => {
    return {
      ...product,
      isHeavy: product.weight > 1,
    };
  });
  return isHeavyFlag;
};
console.log("Bodlogo7", addIsHeavyFlag(data));
// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
const increasePriceByTenPercent = (products) => {
  const priceByTenPercent = products.map((product) => {
    return {
      ...product,
      price: product.price * 1.1,
    };
  });
  return priceByTenPercent;
};
console.log("bodlogo7", increasePriceByTenPercent(data));

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
const addFinalPrice = (products) => {
  const getFinalPrice = products.map((product) => {
    const discFinalPrice =
      product.price - (product.price / 100) * product.discountPercent;
    return {
      ...product,
      finalPrice: (product.finalPrice = discFinalPrice),
    };
  });
  return getFinalPrice;
};
console.log("Bodlogo8", addFinalPrice(data));

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.

const getTopRatedProduct = (products) => {
  let max = products[0];
  products.filter((product) => {
    if (product.rating > max.rating) {
      max = product;
    }
  });
  return max;
};
console.log("Bodlogo9", getTopRatedProduct(data));

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
const getCheapestProduct = (products) => {
  let min = products[0];
  products.filter((product) => {
    if (product.price < min.price) {
      min = product;
    }
  });
  return min;
};
console.log("Bodlogo10", getCheapestProduct(data));

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
const getTotalStock = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += product.stock;
  });
  return total;
};
console.log("bodlogo11", getTotalStock(data));

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
const getTotalPrice = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
};
console.log("Bodlogo12", getTotalPrice(data));
//  products.filter(()=>{})
// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
const filterBySupplier = (products, supplierName) => {
  const bySuppliere = products.filter((product) => {
    return product.supplier === supplierName;
  });
  return bySuppliere;
};
console.log("Bodlogo13", filterBySupplier(data, "PCMall"));

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
const getProductNames = (products) => {
  const productNames = products.map((product) => {
    return product.name;
  });
  return productNames;
};
console.log("Bodlgo14", getProductNames(data));

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
const sortByPriceAscending = (products) => {
  const byPriceAscending = products.sort((a, b) => b.price - a.price);
  return byPriceAscending;
};
console.log("Bodlogo15", sortByPriceAscending(data));

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
const getLowStockProducts = (products) => {
  const lowStockProducts = products.filter((product) => {
    return product.stock < 5;
  });
  return lowStockProducts;
};
console.log("Bodlogo16", getLowStockProducts(data));

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  let arrSuppliers = products.map((product) => {
    return product.supplier;
  });
  let uniqueSuppliers = [];
  arrSuppliers.forEach((supplier) => {
    if (uniqueSuppliers.includes(supplier)) {
    } else {
      uniqueSuppliers.push(supplier);
    }
  });
  return uniqueSuppliers;
}
const resultUniqueSuppliers = getUniqueSuppliers(data);
console.log("Array Of Unique Suppliers", resultUniqueSuppliers);

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
const getNameAndPriceList = (products) => {
  const nameAndPriceList = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
    };
  });
  return nameAndPriceList;
};
console.log("Bodlogo18", getNameAndPriceList(data));
// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
const getHighlyRatedProducts = (products) => {
  const highlyRatedProducts = products.filter(
    (product) => product.rating > 4.5
  );
  return highlyRatedProducts;
};
console.log("Bodlogo19", getHighlyRatedProducts(data));
// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
const addIdToProducts = (products) => {
  const idProducts = products.map((product, index) => {
    return {
      ...product,
      id: index + 1,
    };
  });
  return idProducts;
};
console.log("Bodlogo20", addIdToProducts(data));
