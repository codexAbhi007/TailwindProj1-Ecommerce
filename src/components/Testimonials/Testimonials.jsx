import React from "react";
import Slider from "react-slick";
import sachin from "../../assets/Testimonials/sachin.jpg";
import vk from "../../assets/Testimonials/vk.jpg";
import satya from "../../assets/Testimonials/satya.jpg";
const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO & Founder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.",
    img: sachin,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.",
    img: vk,
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Marketing Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.",
    img: satya,
  },
  {
    id: 4,
    name: "Sarah Williams",
    title: "UX/UI Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "David Brown",
    title: "Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam.",
    img: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-10 pb-16">
      <div className="container">
        {/* header section
         */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-primary">
            What our Customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            reiciendis, iure deserunt dolorem odio laudantium.
          </p>
        </div>

        {/* Testimonial Cards  */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialData.map((data) => {
              return (
                <div className="">
                  <div
                    key={data.id}
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 dark:bg-gray-800  h-[300px] justify-between"
                  >
                    <div className="relative">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20 object-cover object-center"
                      />
                      <div className="text-black/10 text-9xl font-serif absolute -top-16 right-0 dark:text-gray-400" ><div>,,</div></div>
                    </div>

                    
                      <p className="text-gray-500 text-xs">{data.desc}</p>
                      <div className="font-bold text-xl text-black/90 dark:text-white ">
                        <span>{data.name} - </span>
                        <span>{data.title}</span>
                      </div>
                 
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
