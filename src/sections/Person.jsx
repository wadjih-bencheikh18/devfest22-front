import { TbArrowBackUp } from "react-icons/tb";
import { BsInfoCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import brain from "../assets/brainscan.png";
import pdp from "../assets/pdp.jpg";
import { useState } from "react";
export function Person() {
  return (
    <div className="w-screen">
      <div className="grid grid-cols-12 ml-40 pt-20">
        <Left />
        <Right />
      </div>
    </div>
  );
}
function Left() {
  return (
    <div className="col-span-5">
      <Link
        to="/"
        className="flex border rounded-3xl px-4 py-1 align-middle gap-3 w-36 border-[#5E5B70] cursor-pointer hover:bg-[#5E5B70] hover:text-white"
      >
        <TbArrowBackUp size={30} />
        <h1 className="text-lg">Retour</h1>
      </Link>
      <div className="flex flex-col mt-[50px]">
        <div className="flex justify-between items-center mb-[40px]">
          <div className="flex justify-between w-[70%] items-center ">
            <img
              src={pdp}
              alt="pdp"
              className="rounded-[60px] w-[120px] h-[120px] "
            />
            <div>
              <h1 className="text-3xl">Kwider bencheikh</h1>
              <p className="font-light text-lg">52 ans</p>
            </div>
          </div>
          <BsInfoCircle size={23} className="-mt-8 mr-20" />
        </div>
        <div>
          <table>
            <tr>
              <td>
                <h1 className="font-bold text-lg">
                  Date de la dernière visite :
                </h1>
              </td>
              <td>
                <p className="ml-3"> 12/12/2020</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="font-bold text-lg">Maladies :</h1>
              </td>
              <td>
                <p className="ml-3"> Diabète, Hyper-tension</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="font-bold text-lg">Allergies :</h1>
              </td>
              <td>
                <p className="ml-3"> Champignon, Pollen</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
function Right() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="col-start-7 col-span-5">
      <div className="flex gap-3">
        <div className="flex  rounded-3xl px-5 py-1 gap-3 bg-[#FEFEFE] cursor-pointer">
          <h1 className="text-lg">Tout</h1>
        </div>
        <div className="flex  rounded-3xl px-5 py-1 gap-3 bg-[#FEFEFE] cursor-pointer">
          <h1 className="text-lg">Consultations</h1>
        </div>
        <div className="flex  rounded-3xl px-5 py-1 gap-3 bg-[#FEFEFE] cursor-pointer">
          <h1 className="text-lg">Tests</h1>
        </div>
        <div className="flex  rounded-3xl px-5 py-1 gap-3  bg-slate-600 text-white cursor-pointer">
          <h1 className="text-lg ">Labs</h1>
        </div>
        <div className="flex  rounded-3xl px-5   py-1 gap-3 bg-[#FEFEFE] cursor-pointer">
          <h1 className="text-lg">Docs</h1>
        </div>
      </div>
      <div className="inline-block mt-5 rounded-3xl w-64 pl-5  py-1 gap-3 bg-[#FEFEFE]">
        <h1 className="text-lg">Filters</h1>
      </div>
      <Swiper
        modules={[Pagination]}
        className="mt-5"
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-white rounded-3xl py-2 px-4 text-center">
            <h1 className="text-lg font-bold mb-2">Scanner cérébral</h1>
            <img src={brain} alt="img" className="rounded-none" />

            <div className="flex justify-start gap-4 text-left my-3">
              <div className="w-11 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-3xl" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="text-sm">Wadjih bencheikh</h1>
                <p className="text-slate-600 text-xs ">Radiologue</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-3xl py-2 px-4 text-center">
            <h1 className="text-lg font-bold mb-2">Scanner cérébral</h1>
            <img src={brain} alt="img" className="rounded-none" />

            <div className="flex justify-start gap-4 text-left my-3">
              <div className="w-11 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-3xl" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="text-sm">Wadjih bencheikh</h1>
                <p className="text-slate-600 text-xs ">Radiologue</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-3xl py-2 px-4 text-center ">
            <h1 className="text-lg font-bold mb-2">Scanner cérébral</h1>
            <img src={brain} alt="img" className="rounded-none" />

            <div className="flex justify-start gap-4 text-left my-3">
              <div className="w-11 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-3xl" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="text-sm">Wadjih bencheikh</h1>
                <p className="text-slate-600 text-xs ">Radiologue</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-3xl py-2 px-4 text-center ">
            <h1 className="text-lg font-bold mb-2">Scanner cérébral</h1>
            <img src={brain} alt="img" className="rounded-none" />

            <div className="flex justify-start gap-4 text-left my-3">
              <div className="w-11 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-3xl" />
              </div>
              <div className="flex justify-center flex-col">
                <h1 className="text-sm">Wadjih bencheikh</h1>
                <p className="text-slate-600 text-xs ">Radiologue</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        onClick={() => {
          setVisible((v) => !v);
        }}
        className="mt-10  relative z-10 cursor-pointer py-2 px-2 bg-[#5E5B70] rounded-full flex justify-center text-white"
      >
        <HiPlus size={20} />
      </div>
      <div
        className={`grid grid-cols-2 gap-2 transition-all duration-500 ease-in-out  text-center ${
          visible ? "mt-3" : "-mt-9 "
        }  `}
      >
        <div className="col-start-1 cursor-pointer bg-[#5E5B70] py-1 text-white rounded-full transition-all duration-500 ease-in-out hover:scale-105">
          Description
        </div>
        <div className="col-start-2 cursor-pointer bg-[#5E5B70] py-1 text-white transition-all duration-500 ease-in-out rounded-full hover:scale-105   ">
          Formulaire
        </div>
      </div>
    </div>
  );
}
