import React from "react";
import Image1 from "../../assets/hero/img1.png";
import Image2 from "../../assets/hero/img2.png";
import Image3 from "../../assets/hero/img3.png";
import Slider from "react-slick";

const imgList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 70% off on all Products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos mollitia facilis officia sunt, dolore assumenda vitae voluptas commodi blanditiis. Reprehenderit!",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all Women's Wear",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos mollitia facilis officia sunt, dolore assumenda vitae voluptas commodi blanditiis. Reprehenderit!",
  },
  {
    id: 3, // Correcting the duplicate id
    img: Image3,
    title: "Upto 50% off on all Men's Wear",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos mollitia facilis officia sunt, dolore assumenda vitae voluptas commodi blanditiis. Reprehenderit!",
  },
];

const Hero = () => {
  var settings = {
    dots: true,

    arrows: false,
    infinite: true,
    speed: 800,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeedd: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[600px] bg-gray-200 sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-99"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0 relative z-10 ">
        <Slider {...settings}>
          {imgList.map((item) => {
            return (
              <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden cursor-grab ps-2">
                  {/* text section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="700"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      aos-delay="100"
                      className="text-sm"
                    >
                      {item.desc}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      aos-delay="300"
                    >
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                  {/* image section */}
                  <div
                    class="order-1 sm:order-2  "
                    data-aos="zoom-in"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="  flex items-center justify-center">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 object-contain mx-auto lg:scale-120"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
