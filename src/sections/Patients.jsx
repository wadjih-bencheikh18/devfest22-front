import { HiPlus } from "react-icons/hi";
import pdp from "../assets/pdp.jpg";
import bg from "../assets/bg.png";
import { Link } from "react-router-dom";
export function Patients() {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-8 ml-60">
        <h1 className="text-3xl mb-14">Patients</h1>
        <div className="flex gap-4 justify-between">
          <input
            className="rounded-full w-full text-lg py-3 px-5"
            placeholder="Recherche"
          ></input>
          <div className="flex items-center gap-2 px-5 py-3 text-white text-lg bg-[#5E5B70] rounded-full">
            <HiPlus size={25} />
            <p>Ajouter</p>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-3 ">
          <Link
            to="/profile"
            className="flex items-center justify-between py-2 px-2 bg-white rounded-3xl"
          >
            <div className="flex items-center gap-7">
              <div className="w-12 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-full" />
              </div>
              <h1 className="">kadour Bencheikh</h1>
            </div>
            <p className="mr-4 text-sm">Il y a 3h </p>
          </Link>
          <Link
            to="/profile"
            className="flex items-center justify-between py-2 px-2 bg-white rounded-3xl"
          >
            <div className="flex items-center gap-7">
              <div className="w-12 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-full" />
              </div>
              <h1 className="">Dadi Bencheikh</h1>
            </div>
            <p className="mr-4 text-sm">Il y a 3h </p>
          </Link>
          <Link
            to="/profile"
            className="flex items-center justify-between py-2 px-2 bg-white rounded-3xl"
          >
            <div className="flex items-center gap-7">
              <div className="w-12 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-full" />
              </div>
              <h1 className="">Kira Bencheikh</h1>
            </div>
            <p className="mr-4 text-sm">Il y a 3h </p>
          </Link>
          <Link
            to="/profile"
            className="flex items-center justify-between py-2 px-2 bg-white rounded-3xl"
          >
            <div className="flex items-center gap-7">
              <div className="w-12 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-full" />
              </div>
              <h1 className="">rola Bencheikh</h1>
            </div>
            <p className="mr-4 text-sm">Il y a 3h </p>
          </Link>
          <Link
            to="/profile"
            className="flex items-center justify-between py-2 px-2 bg-white rounded-3xl"
          >
            <div className="flex items-center gap-7">
              <div className="w-12 flex justify-center flex-col">
                <img src={pdp} alt="pdp" className="rounded-full" />
              </div>
              <h1 className="">hako Bencheikh</h1>
            </div>
            <p className="mr-4 text-sm">Il y a 3h </p>
          </Link>
        </div>
      </div>
      <div className="col-start-2">
        <img src={bg} className=" w-[500px]  mt-20 ml-20" />
      </div>
    </div>
  );
}
