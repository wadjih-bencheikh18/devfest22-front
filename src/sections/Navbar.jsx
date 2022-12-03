import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import wajih from "../assets/wajih.jpg";
import sofia from "../assets/sofia.jpg";
import logo from "../assets/logo.png";
export function Navbar({ state = 0 }) {
  return (
    <div className="grid grid-cols-12 mx-5">
      <div>
        <img src={logo} alt="" className="h-16 mt-3 ml-3" />
      </div>
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
      {state !== 3 && (
        <div className="col-span-3 col-start-10 cursor-pointer my-5 flex justify-center flex-col px-4 h-14 rounded-3xl bg-white ml-20">
          <div className="flex justify-between">
            <div className="flex justify-start gap-4">
              <div className="w-11 flex justify-center flex-col">
                {state === 0 ? (
                  <img src={wajih} alt="pdp" className="rounded-3xl" />
                ) : (
                  <img src={sofia} alt="pdp" className="rounded-3xl" />
                )}
              </div>
              <div className="flex justify-center flex-col">
                {state === 0 ? (
                  <h1 className="font-medium">Wadjih Bencheikh</h1>
                ) : (
                  <h1 className="font-medium">Sofia Boumarsol</h1>
                )}
                {state === 0 && (
                  <p className="text-blue text-sm -mt-1">Généraliste</p>
                )}
              </div>
            </div>
            <div className="flex justify-center flex-col">
              <FiChevronDown size={28} className="text-blue" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
