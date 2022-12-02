import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import pdp from "../assets/pdp.jpg";
export function Navbar() {
  return (
    <div className="grid grid-cols-12 mx-5">
      <div className=" col-span-2 col-start-6 my-5 flex justify-center flex-col px-7 h-14 rounded-3xl bg-white">
        <div className="flex justify-between gap-7">
          <div className="flex justify-center flex-col">
            <AiFillHome size={28} className="text-slate-600" />
          </div>
          <div className="flex justify-center flex-col">
            <IoMdNotifications size={30} className="text-slate-600" />
          </div>
          <div className="flex justify-center flex-col">
            <IoSettingsSharp size={28} className="text-slate-600" />
          </div>
        </div>
      </div>
      <div className="col-span-3 col-start-10 my-5 flex justify-center flex-col px-4 h-14 rounded-3xl bg-white ml-20">
        <div className="flex justify-between">
          <div className="flex justify-start gap-4">
            <div className="w-11 flex justify-center flex-col">
              <img src={pdp} alt="pdp" className="rounded-3xl" />
            </div>
            <div className="flex justify-center flex-col">
              <h1>Wadjih bencheikh</h1>
              <p className="text-slate-600 text-sm -mt-1">Generalist</p>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <FiChevronDown size={28} className="text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
