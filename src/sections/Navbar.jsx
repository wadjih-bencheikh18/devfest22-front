import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import wajih from "../assets/wajih.jpg";
export function Navbar() {
  return (
    <div className="grid grid-cols-12 mx-5">
      <div className="col-span-2 col-start-6 my-5 flex justify-center flex-col px-7 h-14 rounded-3xl bg-white">
        <div className="flex justify-between gap-7">
          <div className="flex justify-center flex-col">
            <AiFillHome size={28} className="text-blue cursor-pointer" />
          </div>
          <div className="flex justify-center flex-col">
            <IoMdNotifications size={30} className="text-blue cursor-pointer" />
          </div>
          <div className="flex justify-center flex-col">
            <IoSettingsSharp size={28} className="text-blue cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="col-span-3 col-start-10 cursor-pointer my-5 flex justify-center flex-col px-4 h-14 rounded-3xl bg-white ml-20">
        <div className="flex justify-between">
          <div className="flex justify-start gap-4">
            <div className="w-11 flex justify-center flex-col">
              <img src={wajih} alt="pdp" className="rounded-3xl" />
            </div>
            <div className="flex justify-center flex-col">
              <h1 className="font-medium">Wadjih Bencheikh</h1>
              <p className="text-blue text-sm -mt-1">Généraliste</p>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <FiChevronDown size={28} className="text-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}
