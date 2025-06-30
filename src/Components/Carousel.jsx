import React, { useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
    const { data, fetchAllProduct } = useContext(DataContext);
      const navigate = useNavigate();

    useEffect(() => {
        fetchAllProduct();
    }, []);

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick}
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f53347",
                    borderRadius: "50%",
                    left: "30px",
                    zIndex: 3,
                }}
            >
                <AiOutlineArrowLeft color="white" />
            </div>
        );
    };

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick}
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f53347",
                    borderRadius: "50%",
                    right: "30px",
                    zIndex: 3,
                }}
            >
                <AiOutlineArrowRight color="white" />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div>
            <Slider {...settings}>
                {data?.slice(0, 7)?.map((item, index) => (
                    <div
                        key={item.id || index}
                        className="bg-gradient-to-r from-[#0a071d] via-[#28235d] to-[#05057a] z-10">
                        <div className="flex gap-10 justify-center items-center px-4 h-[600px]">
                            <div className="space-y-6 max-w-xl">
                                <h3 className="text-red-500 font-semibold text-sm font-sans uppercase">
                                    Powering Your World with the Best in Electronics
                                </h3>
                                <h1 className="text-white line-clamp-3 md:w-[500px] uppercase text-2xl font-bold">
                                    {item.title}
                                </h1>
                                <p className="text-gray-500 md:w-[500px] line-clamp-3 pr-7">
                                    {item.description}
                                </p>
                                <button   onClick={() => navigate('/product')} className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer mt-2">
                                    Shop Now
                                </button>
                            </div>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-full w-[300px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <Category />
        </div>
    );
};

export default Carousel;
