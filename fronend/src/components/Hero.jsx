import React from "react";
import hero from "../assets/hero.png";
import { IoSearchCircleSharp } from "react-icons/io5";

const Hero = () => {
  
  return (
    <>
      <div
        className="w-full h-[165vh] bg-center bg-cover text-white relative z-[2]"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="flex flex-col gap-5 absolute top-[18%] left-1/2 translate-x-[-50%]">
          <h1 className="text-7xl  lg:text-5xl md:text-4xl font-bold leading-snug text-center text-nowrap md:text-wrap">
            Make Your Interior More <br />
            Minimalistic & Modern
          </h1>
          <p className="text-center font-thin text-[24px] lg:text-[18px] md:text-[16px]">
            Turn your room with utopia into a lot more minimalist <br />
            and modern with ease and speed
          </p>
        </div>
        <div
          className="serach flex justify-between items-center rounded-3xl absolute top-[62%] lg:top[75%] md:top[80%] left-1/2 translate-x-[-50%] border-2 border-slate-200  min-w-[350px] py-2 px-2"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search furniture"
            className="input-field d-inline-block bg-transparent outline-none min-w-[300px]"
          />
          <IoSearchCircleSharp
            style={{
              backgroundColor: "#E58411",
              borderRadius: "50%",
              padding: "3px",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
