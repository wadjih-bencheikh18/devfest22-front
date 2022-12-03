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
import mas from "../assets/mas.jpg";
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
export function Person() {
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
      <Link
        to="/"
        className="flex justify-center items-center pr-2 border rounded-3xl py-2 align-middle gap-3 w-32 border-blue cursor-pointer hover:bg-blue hover:text-clear"
      >
        <TbArrowBackUp size={25} />
        <h1 className="">Retour</h1>
      </Link>
      <div className="flex flex-col mt-24">
        <div className="flex justify-between items-center mb-[40px]">
          <div className="flex gap-x-16 w-[90%] items-center">
            <img
              src={mas}
              alt="pdp"
              className="rounded-[60px] w-[100px] h-[100px] "
            />
            <div className="gap-x-20 flex items-center">
              <div>
                <h1 className="text-2xl font-medium">Massaoud Bouzid</h1>
                <p className="font-light">52 ans</p>
              </div>
              <BsInfoCircle size={23} className="-mt-6" />
            </div>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <td width={150}>
                <h1 className="font-medium">Dernière visite :</h1>
              </td>
              <td>
                <p className="ml-3 font-light">03-12-2022</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="font-medium">Maladies :</h1>
              </td>
              <td>
                <p className="ml-3 font-light">Diabète, Hyper-tension</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1 className="font-medium">Allergies :</h1>
              </td>
              <td>
                <p className="ml-3 font-light">Champignons, Pollen</p>
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
          <h1 className="">Tests</h1>
        </div>
        <div className="flex rounded-3xl px-7 py-2 gap-3 bg-blue text-clear cursor-pointer">
          <h1 className="">Labs</h1>
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
      <div
        onClick={() => {
          setVisible((v) => !v);
        }}
        className="mt-1 relative z-10 cursor-pointer py-3 px-2 bg-blue rounded-full flex justify-center text-clear"
      >
        <HiPlus size={20} />
      </div>
      <div
        className={`grid grid-cols-2 gap-2 transition-all duration-500 ease-in-out text-center ${
          visible ? "mt-3" : "-mt-10"
        }  `}
      >
        <Link
          to="/desc"
          className="col-start-1 cursor-pointer bg-blue py-2 text-clear rounded-full transition-all duration-500 ease-in-out hover:scale-105"
        >
          Description
        </Link>
        <div className="col-start-2 cursor-pointer bg-blue py-2 text-clear transition-all duration-500 ease-in-out rounded-full hover:scale-105   ">
          Formulaire
        </div>
      </div>
    </div>
  );
}
