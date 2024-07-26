import React from "react";
import w1 from "../../assets/Woman/w1.jpg";
import w2 from "../../assets/Woman/w2.png";
import w3 from "../../assets/Woman/w3.jpg";
import w4 from "../../assets/Woman/w4.jpg";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: w1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 2,
    img: w2,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 3,
    img: w3,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 3,
    img: w4,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 1,
    img: w1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 2,
    img: w2,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 3,
    img: w3,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 3,
    img: w4,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 3,
    img: w1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 3,
    img: w4,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    aosDelay: "400",
  },
];

const Products = () => {
  return (
    <div className="pt-14 mb-12 pb-12 dark:bg-gray-900">
      <div className="relative">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-[600px] mx-auto flex flex-col gap-3">
          <p data-aos="fade-up" className="text-xl text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            assumenda veniam obcaecati?
          </p>
        </div>
        {/* Body Section  */}
        <div className="py-4 px-4 xl:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 max-w-[1200px] mx-auto">
            {/* card section  */}
            {ProductsData.map((data) => (
              <div
                className="shadow-2xl space-y-10 rounded-lg hover:scale-120 relative hover:cursor-pointer dark:bg-gray-800 p-2"
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[200px] object-cover rounded-md"
                />
                <div className="p-2">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-2 justify-center p-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
        {/* Button Section  */}
        <div className="text-center mt-4">
          <button data-aos="zoom-in" className="btn hover:text-primary hover:bg-white">View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
