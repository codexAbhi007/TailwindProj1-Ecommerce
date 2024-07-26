import React from "react";
import s1 from "../../assets/Shirts/s1.png";
import s2 from "../../assets/Shirts/s2.png";
import s3 from "../../assets/Shirts/s3.png";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: s1,
    title: "Casual Wear",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti tempore odio sed unde omnis, enim inventore nobis a ducimus!",
  },
  {
    id: 2,
    img: s2,
    title: "Printed Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti tempore odio sed unde omnis, enim inventore nobis a ducimus!",
  },
  {
    id: 3,
    img: s3,
    title: "Women Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corrupti tempore odio sed unde omnis, enim inventore nobis a ducimus!",
  },
];
const TopProducts = () => {
  return (
    <div className="">
      <div className="container pb-24">
        {/* Header Section  */}
        <div className="text-left mb-24 flex flex-col gap-3">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            assumenda veniam obcaecati?
          </p>
        </div>
        {/* Body Section  */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductsData.map((data)=>(
                <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-primary hover:text-white relative  duration-300 group max-w-[300px] cursor-pointer shadow-2xl"  >
                    {/* Image section  */}
                    <div className="h-[100px]">
                        <img src={data.img} alt="" className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-110  duration-300" />
                    </div>
                    {/* Details section  */}
                    <div className="p-4 text-center">
                        {/* Star Rating  */}
                        <div className="w-full flex items-center justify-center gap-1"> 
                            <FaStar className="star"/>
                            <FaStar className="star"/>
                            <FaStar className="star"/>
                            <FaStar className="star"/>
                        </div>
                        <h1 className="text-xl font-bold">{data.title}</h1>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.desc}</p>
                        <button  className="btn mt-3 group-hover:dark:bg-white dark:group-hover:text-primary"> Order Now </button>
                    </div>
                </div>
            ))}
        </div>

        
      </div>
    </div>
  );
};

export default TopProducts;
