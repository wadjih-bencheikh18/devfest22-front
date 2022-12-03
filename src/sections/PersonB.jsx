import { TbArrowBackUp } from "react-icons/tb";
import { BsInfoCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import brain from "../assets/brainscan.png";
import poumon from "../assets/poumon.jpg";
import wajih from "../assets/wajih.jpg";
import moon from "../assets/Mounia.jpg";
import nazim from "../assets/bendib.png";
import sofia from "../assets/sofia.jpg";
import dents from "../assets/dents.jpg";
import { useState } from "react";

const cards = [
  {
    title: "Scanner cérébral",
    content: brain,
    pic: wajih,
    author: "Wadjih Bencheikh",
    job: "Radiologue",
  },
  {
    title: "Radio dentaire",
    content: dents,
    pic: nazim,
    author: "Nazim Bendib",
    job: "Dentiste",
  },
  {
    title: "Radio pulmonaire",
    content: poumon,
    pic: moon,
    author: "Mounia Kias",
    job: "Radiologue",
  },
];
export function PersonB() {
  return (
    <div className="w-screen">
      <div className="grid grid-cols-12 ml-40 pt-16">
        <Left />
        <Right />
      </div>
    </div>
  );
}
function Left() {
  return (
    <div className="col-span-5">
      <div className="flex flex-col mt-24">
        <div className="flex justify-between items-center mb-[40px]">
          <div className="flex gap-x-16 w-[90%] items-center">
            <img
              src={sofia}
              alt="pdp"
              className="rounded-[60px] w-[100px] h-[100px] "
            />
            <div className="gap-x-20 flex items-center">
              <div>
                <h1 className="text-2xl font-medium">Sofia Boumarsol</h1>
                <p className="font-light">32 ans</p>
              </div>
              <BsInfoCircle size={23} className="-mt-6" />
            </div>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <h1 className="font-medium">Maladies :</h1>
              </td>
              <td>
                <p className="ml-3 font-light">Aucune</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="font-medium">Allergies :</h1>
              </td>
              <td>
                <p className="ml-3 font-light">Aucune</p>
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
        <div className="flex rounded-3xl px-7 py-2 gap-3 bg-clear cursor-pointer">
          <h1 className="">Tout</h1>
        </div>
        <div className="flex rounded-3xl px-7 py-2 gap-3 bg-clear cursor-pointer">
          <h1 className="">Consultations</h1>
        </div>
        <div className="flex rounded-3xl px-7 py-2 gap-3 bg-clear cursor-pointer">
          <h1 className="">Analyses</h1>
        </div>
        <div className="flex rounded-3xl px-7 py-2 gap-3 bg-blue text-clear cursor-pointer">
          <h1 className="">Scanners</h1>
        </div>
        <div className="flex rounded-3xl px-7 py-2 gap-3 bg-clear cursor-pointer">
          <h1 className="">Docs</h1>
        </div>
      </div>
      <div className="inline-block mt-2 rounded-3xl w-64 pl-5 py-2 gap-3 bg-clear">
        <input placeholder="Filtrer" className="font-light"></input>
      </div>
      <Swiper
        modules={[Pagination]}
        className="mt-2 h-[325px]"
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="bg-clear grid h-72 rounded-3xl py-2 px-4 grid-rows-4">
              <h1 className="font-medium mb-2 flex justify-center items-center">
                {card.title}
              </h1>
              <div className="flex row-span-2 justify-center">
                <img
                  src={card.content}
                  alt="img"
                  className="rounded-3xl"
                  width={200}
                />
              </div>

              <div className="flex px-5 justify-start gap-4 text-left my-3">
                <div className="flex w-11 justify-center flex-col">
                  <img src={card.pic} alt="pic" className="rounded-full" />
                </div>
                <div className="flex justify-center flex-col">
                  <h1 className="text-sm">{card.author}</h1>
                  <p className="text-blue text-xs ">{card.job}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
