import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Mobile",
    image: "/images/categories/mobile.jpg",
    path: "/category/mobile",
  },
  {
    name: "Laptop",
    image: "/images/categories/laptop.jpg",
    path: "/category/laptop",
  },
  {
    name: "Computer",
    image: "/images/categories/pc.jpg",
    path: "/category/computer",
  },
  {
    name: "Car",
    image: "/images/categories/car.jpg",
    path: "/category/car",
  },
  {
    name: "Home Appliances",
    image: "/images/categories/home-appliances.jpg",
    path: "/category/home-appliances",
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className="border rounded-lg p-4"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-32 object-cover mb-2"
          />
          <h2 className="text-lg font-bold text-center">{category.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
